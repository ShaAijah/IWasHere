document.addEventListener('DOMContentLoaded', () => {
  const posts = [
    {
      id: 'p-92925',
      title: '9.29.25',
      date: '9.29.25',
      mood: 'introspective 💋',
      song: 'Get Me Bodied – Beyoncé',
      snippet: 'My work explores the layered textures of Black girlhood...',
      content: `
        <p>My work explores the layered textures of Black girlhood — the ways memory, culture, and technology shape how we learn to see ourselves. Through writing, design, and digital archiving, I turn nostalgia into a lens: looking back to make sense of what the internet, beauty culture, and pop media taught us about identity and worth.</p>
        <p>I draw from small, personal rituals — the cool gel on my scalp, Saturday cartoons, the hum of a flat iron in the background. I draw from online worlds, too — dress-up games, doll forums, and the endless scroll of trying to find someone who looked like me in pixels. These experiences sit between ordinary and political. They show how early Black girls learn patience, creativity, and self-definition, often in spaces that refuse to reflect them.</p>
        <p>This project celebrates the quiet radicalism of play...</p>
      `,
      audio: 'SpotiDown.App - Get Me Bodied - Beyoncé.mp3',
      image: 'beyonce.png'
    },
    {
      id: 'p-10125',
      title: '10.1.25',
      date: '10.1.25',
      mood: 'nostalgic 🦋',
      song: 'So Gone – Monica',
      snippet: 'Welcome to my corner of the web; part archive, part diary...',
      content: `
        <p>Welcome to my corner of the web; part archive, part diary, part time machine.</p>
        <p>This project lives at the intersection of beauty, girlhood, and the internet, tracing how Black girls have always existed online even when we weren’t seen. From the rituals of haircare to the digital rituals of customizing avatars, from the way Bratz dolls got side-eyed as "too grown" to the way school dress codes tried to hide our bodies, this space holds the contradictions and creativity of growing up while Black and feminine in a world that’s constantly watching.</p>
      `,
      audio: 'SpotiDown.App - So Gone - Monica.mp3',
      image: 'monica.jpg'
    },
    {
      id: 'p-10525',
      title: '10.5.25',
      date: '10.5.25',
      mood: 'sentimental 💫',
      song: 'Pretty Girl Rock – Keri Hilson',
      snippet: 'It starts with a memory: the soft buzz of a family computer...',
      content: `
        <p>It starts with a memory: the soft buzz of a family computer, the smell of Blue Magic, the hum of your mom’s favorite show in the background. Saturdays were slow — the kind of days where time felt stretchy, full of care and routine.</p>
        <p>Somewhere between cartoons and cornrows, I’d open a browser tab: GirlsGoGames.com. The site loaded slow, all pink gradients and sparkly cursors...</p>
      `,
      audio: 'SpotiDown.App - Pretty Girl Rock - Keri Hilson.mp3',
      image: 'keri.jpg'
    },
    {
      id: 'p-10925',
      title: '10.9.25',
      date: '10.9.25',
      mood: 'curious 🧩',
      song: 'Video Girl – FKA twigs',
      snippet: 'When you zoom out from one game, one doll...',
      content: `
        <p>When you zoom out from one game, one doll, one mirror you start to see the whole system.</p>
        <p>Those childhood games, those dolls, those fashion ads weren’t isolated moments. They were part of a simulation of beauty built by global industries...</p>
      `,
      audio: 'SpotiDown.App - Video Girl - FKA twigs.mp3',
      image: 'fka.jpg'
    },
    {
      id: 'p-101125',
      title: '10.11.25',
      date: '10.11.25',
      mood: 'reflective 💭',
      song: 'Don’t Touch My Hair – Solange',
      snippet: 'Welcome back, bestie 💅🏽...',
      content: `
        <p>Welcome back, bestie 💅🏽
        If you’ve made it this far, you’re officially deep inside my digital dreamspace...</p>
      `,
      audio: 'SpotiDownloader.com - Don’t Touch My Hair - Solange.mp3',
      image: 'solange.webp'
    },
  ];

  /* ================
     =  DOM targets  =
     ================ */
  const postsContainer = document.querySelector('.posts');
  const modal = document.querySelector('.modal');
  const sheet = document.querySelector('.sheet');

  const newPostBtn = document.getElementById('newPostBtn');
  const entryModal = document.getElementById('entryModal');
  const closeEntryModal = document.getElementById('closeEntryModal');
  const saveEntry = document.getElementById('saveEntry');

  /* ============================
     =  RICH TEXT EDITOR SETUP  =
     ============================ */
  // We'll dynamically create a small toolbar + contenteditable editor and replace the textarea with it.
  function ensureRichEditor() {
    const textarea = document.querySelector('#entrySnippet');
    if (!textarea) return;

    // If we've already created the editor, do nothing
    if (document.getElementById('entryRich')) return;

    // Create toolbar
    const toolbar = document.createElement('div');
    toolbar.id = 'richToolbar';
    toolbar.style.display = 'flex';
    toolbar.style.gap = '8px';
    toolbar.style.margin = '6px 0';

    const btn = (label, cmd) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.innerHTML = label;
      b.className = 'btn';
      b.style.fontSize = '12px';
      b.addEventListener('click', () => {
        if (cmd === 'createLink') {
          const url = prompt('Enter URL (include http:// or https://)');
          if (url) document.execCommand('createLink', false, url);
        } else {
          document.execCommand(cmd, false, null);
        }
      });
      return b;
    };

    toolbar.appendChild(btn('<strong>B</strong>', 'bold'));
    toolbar.appendChild(btn('<em>I</em>', 'italic'));
    toolbar.appendChild(btn('<u>U</u>', 'underline'));
    toolbar.appendChild(btn('&bull; List', 'insertUnorderedList'));
    toolbar.appendChild(btn('Link', 'createLink'));

    // Create contenteditable div
    const editor = document.createElement('div');
    editor.id = 'entryRich';
    editor.setAttribute('contenteditable', 'true');
    editor.style.minHeight = '120px';
    editor.style.padding = '8px';
    editor.style.border = '1px solid rgba(255,255,255,0.2)';
    editor.style.borderRadius = '8px';
    editor.style.background = 'rgba(0,0,0,0.08)';
    editor.style.color = '#fff';
    editor.style.outline = 'none';
    editor.style.whiteSpace = 'pre-wrap';

    // Replace textarea with toolbar + editor
    textarea.style.display = 'none';
    textarea.insertAdjacentElement('afterend', toolbar);
    toolbar.insertAdjacentElement('afterend', editor);
  }

  /* ============================
     =  localStorage handling   =
     ============================ */
  const savedPosts = JSON.parse(localStorage.getItem('userPosts')) || [];
  // Merge saved posts with defaults - saved posts appear after defaults (newest at end)
  const allPosts = [...posts, ...savedPosts];

  /* ============================
     =  RENDER / OPEN POST LOGIC =
     ============================ */
  function renderPosts() {
    postsContainer.innerHTML = allPosts
      .map(p => `
      <div class='post' data-id='${p.id}'>
        <span class='sticker'>${p.mood || ''}</span>
        <div class='title'>${escapeHtml(p.title)}</div>
        <div class='snippet'>${p.snippet ? escapeHtml(p.snippet) : (p.content ? stripHtml(p.content).slice(0, 120) + '...' : '')}</div>
      </div>
    `).join('');
  }

  // Helper: escape plain text when rendering titles/snippets
  function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  // Helper: strip html tags for snippet fallback
  function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  }

  renderPosts();

  postsContainer.addEventListener('click', e => {
    const card = e.target.closest('.post');
    if (!card) return;
    const post = allPosts.find(x => x.id == card.dataset.id);
    if (!post) return;
    openPost(post);
  });

  function openPost(post) {
    const sheetInner = `
      <div class='post-header'>
        <h2>${escapeHtml(post.title)}</h2>
        <div><em>${post.date} | Mood: ${escapeHtml(post.mood || '')}</em></div>
      </div>
      <div class='song-box'>
        ${post.image ? `<img src="${post.image}" class="album-thumb" alt="album cover">` : ''}
        <div class="song-info">
          <strong>${escapeHtml(post.song || '')}</strong>
          ${post.audio ? `<audio controls src="${post.audio}" class="player"></audio>` : ''}
        </div>
      </div>
      <div class='post-content'>${post.content || ''}</div>
      <button class='btn muted close-btn' id='modalCloseBtn'>Close ✦</button>
    `;
    sheet.innerHTML = sheetInner;
    modal.classList.add('open');

    // Wire close button inside sheet
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  // Close modal when clicking background (existing behaviour)
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('open');
  });

  /* ============================
     =  NEW ENTRY / SAVE HANDLER =
     ============================ */
  newPostBtn.addEventListener('click', () => {
    ensureRichEditor();

    // Clear inputs (both native and editor)
    const title = document.getElementById('entryTitle');
    const mood = document.getElementById('entryMood');
    const song = document.getElementById('entrySong');
    const audio = document.getElementById('entryAudio');
    const textarea = document.getElementById('entrySnippet');
    const editor = document.getElementById('entryRich');

    if (title) title.value = '';
    if (mood) mood.value = '';
    if (song) song.value = '';
    if (audio) audio.value = '';
    if (textarea) textarea.value = '';
    if (editor) editor.innerHTML = '';

    entryModal.classList.add('open');
  });

  closeEntryModal.addEventListener('click', () => {
    entryModal.classList.remove('open');
  });

  saveEntry.addEventListener('click', () => {
    // Grab values
    const titleEl = document.getElementById('entryTitle');
    const moodEl = document.getElementById('entryMood');
    const songEl = document.getElementById('entrySong');
    const audioEl = document.getElementById('entryAudio');
    const editor = document.getElementById('entryRich');
    const textarea = document.getElementById('entrySnippet');

    const title = (titleEl && titleEl.value || '').trim();
    const mood = (moodEl && moodEl.value || '').trim();
    const song = (songEl && songEl.value || '').trim();
    const audio = (audioEl && audioEl.value || '').trim();

    // Content: prefer rich editor HTML, fallback to textarea
    let contentHtml = '';
    if (editor && editor.innerHTML.trim()) {
      contentHtml = editor.innerHTML.trim();
    } else if (textarea && textarea.value.trim()) {
      // simple convert newlines to paragraphs
      contentHtml = textarea.value.trim().split(/\n+/).map(s => `<p>${escapeHtml(s)}</p>`).join('');
    }

    if (!title || !contentHtml) {
      alert('Please provide a title and some content for your entry.');
      return;
    }

    const newPost = {
      id: `p-${Date.now()}`,
      title,
      date: new Date().toLocaleDateString(),
      mood: mood || '📝',
      song: song || '',
      snippet: stripHtml(contentHtml).slice(0, 140),
      content: contentHtml,
      audio: audio || '',
      image: ''
    };

    // Persist in localStorage
    savedPosts.push(newPost);
    try {
      localStorage.setItem('userPosts', JSON.stringify(savedPosts));
    } catch (err) {
      console.warn('Failed to save to localStorage', err);
    }

    // Update UI
    allPosts.push(newPost);
    renderPosts();

    // Close modal
    entryModal.classList.remove('open');
  });

  /* ============================
     =  CHARACTER SLIDER (unchanged)
     ============================ */
  const activeCharacter = document.getElementById('activeCharacter');
  const characterName = document.getElementById('characterName');
  const prevChar = document.getElementById('prevChar');
  const nextChar = document.getElementById('nextChar');

  const characterData = [
    { name: '💅🏽', src: '1.png', cursor: '💅🏽', theme: '#eb46b7ff' },
    { name: '🌸', src: '2.png', cursor: '🌸', theme: '#b63488ff' },
    { name: '🖤', src: '3.png', cursor: '🖤', theme: '#4d0e64ff' },
    { name: '✨', src: '5.png', cursor: '✨', theme: '#dab56dff' },
  ];

  let currentChar = 0;

  function updateCharacter() {
    const avatarBox = document.querySelector('.current-avatar');
    avatarBox.classList.add('out');
    setTimeout(() => {
      const char = characterData[currentChar];
      activeCharacter.src = char.src;
      characterName.textContent = char.name;

      // Cursor
      const cursorSVG = encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' height='32' width='32'><text y='22' font-size='20'>${char.cursor}</text></svg>`
      );
      const cursorData = `url("data:image/svg+xml;utf8,${cursorSVG}") 0 0, auto`;

      document.body.style.cursor = cursorData;
      document.querySelectorAll('*').forEach(el => (el.style.cursor = cursorData));

      // Theme tint + glow
      document.body.style.backgroundColor = char.theme + '55';
      document.querySelectorAll('.btn').forEach(btn => {
        btn.style.boxShadow = `0 0 15px ${char.theme}, inset 0 0 5px #fff`;
      });
      activeCharacter.style.boxShadow = `0 0 25px ${char.theme}, inset 0 0 6px #fff`;
      activeCharacter.style.borderColor = char.theme;
      characterName.style.textShadow = `0 0 8px ${char.theme}`;

      avatarBox.classList.remove('out');
      avatarBox.classList.add('in');
    }, 200);
  }

  prevChar.addEventListener('click', () => {
    currentChar = (currentChar - 1 + characterData.length) % characterData.length;
    updateCharacter();
  });
  nextChar.addEventListener('click', () => {
    currentChar = (currentChar + 1) % characterData.length;
    updateCharacter();
  });

  updateCharacter();

  /* ============================
   =  GALLERY LIGHTBOX LOGIC  =
   ============================ */
const galleryImages = document.querySelectorAll('.gallery-item img');
const mediaModal = document.getElementById('mediaModal');
const mediaContent = document.getElementById('mediaContent');
const mediaDesc = document.getElementById('mediaDesc');
const closeMediaModal = document.getElementById('closeMediaModal');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    mediaContent.innerHTML = `
      <div class="bling-frame">
        <img src="${img.src}" alt="${img.alt}">
        <div class="frame-glow"></div>
        <div class="frame-sparkle"></div>
      </div>
    `;
    mediaDesc.textContent = img.alt || 'Untitled image';
    mediaModal.classList.add('open');
  });
});

if (closeMediaModal) {
  closeMediaModal.addEventListener('click', () => mediaModal.classList.remove('open'));
}
mediaModal.addEventListener('click', e => {
  if (e.target === mediaModal) mediaModal.classList.remove('open');
});

});
