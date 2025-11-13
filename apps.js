document.addEventListener('DOMContentLoaded', () => {
  /* ============================
     =  DEFAULT EMBEDDED POSTS   =
     ============================ */
  const posts = [
    {
      id: 'p-92925',
      title: '9.29.25',
      date: '9.29.25',
      mood: 'reflective 💋',
      song: 'Let Me Be Great [Feat. Angélique Kidjo] - Sampa the Great',
      snippet: 'Growing up online felt like living in two worlds...',
      content: `
       <p>idk, sometimes i think about how weird it was growing up online like half of me lived on myspace, youtube, and early tumblr, and the other half was just trying to figure out who i was in real life.</p>
        <p>i’d scroll for hours looking for girls who looked like me, or at least felt like me awkward, funny, a little dramatic, still figuring it out.</p>
        <p>i remember stumbling across <em>The Misadventures of Awkward Black Girl</em> on youtube, and honestly? it changed something in me. seeing Issa Rae just… exist. she wasn’t performing “black excellence” or trying to be perfect she was just awkward and hilarious and human. it felt like someone finally cracked the screen open and said, “you can be seen like this too.”</p>
        <p>that was also around the same time as those tumblr accounts like <em>Black Girl Problems</em>, which somehow managed to be both funny and heartbreaking. like one post would make you laugh out loud “when you spend three hours straightening your hair and it rains five minutes later 😭” and the next would remind you of the quiet weight that comes with being seen as “too loud,” “too grown,” or “too different.”</p>
        <p>when i think about those moments now, i realize that so much of early internet culture for black girls was about finding a mirror that reflected back more than stereotypes. it was us building community in comment sections, sharing survival tips in reblogs, remixing ourselves into existence.</p>
        <p>that’s kinda what this space is for too a mix of memory, media, and the messy in-between. the parts of black girlhood that don’t always make it into the highlight reel.</p>
      `,
      audio: 'SpotiDown.App - Let Me Be Great _Feat. Angélique Kidjo_ - Sampa the Great.mp3',
      image: 'sampa.jpg'
    },
    {
      id: 'p-10125',
      title: '10.1.25',
      date: '10.1.25',
      mood: 'nostalgic 🦋',
      song: 'Bossy (feat. Too $hort) – Kelis',
      snippet: 'ngl, i was obsessed with bratz dolls...',
      content: `
      <p>ngl, i was obsessed with bratz dolls. like, unhealthily. i’d sit on the carpet for hours, matching shoes to purses, re-braiding their hair even when it didn’t need fixing. there was something about them, their clothes, their makeup, their attitude, that felt realer to me than barbie ever did. barbie lived in a dream world; the bratz girls lived in something closer to mine.</p>
      <p>barbie’s world felt clean and perfect — like an ad for a life i couldn’t touch. bratz had chunky boots, glitter eyeliner, and baby tees that looked like something the girls at the beauty supply store would wear. they didn’t look like me exactly, but they felt like me.</p>
      <p>i didn’t know it at the time, but bratz were also kind of radical. they were multiracial, urban, and unapologetic in a world that told girls of color to tone it down. and still, adults called them “too grown” and “overly sexual.” like they couldn’t handle the idea of girls with lip gloss and confidence. i think that’s why i loved them more. they were bold in the way i wished i could be.</p>
      <p>years later, when i found old bratz fan pages on tumblr and myspace, it was like nostalgia mixed with validation. people were posting pixel collages and edits of yasmin, sasha, cloe, and jade with captions like “style is power 💅🏽.” it made me realize that what some people saw as “too much” was really just a reflection of a culture that had always been full of flair and creativity.</p>
      <p>the bratz were never the problem. the world just wasn’t ready for them.</p>
      `,
      audio: 'SpotiDown.App - Bossy _feat. Too _hort_ - Kelis.mp3',
      image: 'kelis.jpg'
    },
    {
      id: 'p-10525',
      title: '10.5.25',
      date: '10.5.25',
      mood: 'sentimental 💫',
      song: 'Don’t Touch My Hair – Solange',
      snippet: 'there’s this quiet memory i always go back to...',
      content: `
      <p>there’s this quiet memory i always go back to sitting between my mom’s knees while <em>that’s so raven</em> played in the background, a towel draped around my shoulders, and her parting my hair with the rat-tail comb. i can still feel the cool touch of gel against my scalp, the smell of blue magic, and that mix of love and lowkey pain that only comes with getting your hair done.</p>
      <p>back then, i thought it was just routine something every little girl went through. but now, i realize it was something deeper. those hours spent twisting and braiding were lessons in patience, in care, in culture. my mom never said it out loud, but she was teaching me that beauty wasn’t about looking like everyone else it was about ritual, history, and self-love in a world that tried to tell us otherwise.</p>
      <p>then youtube happened, and suddenly, i had a new set of teachers. i’d watch Taren Guy, Naptural85, and later Jackie Aina showing how to twist, deep condition, and glow up with what we already had. those videos were community. you’d scroll through the comments and see girls saying, “this changed my life” or “i finally love my curls.” it was never just about hair it was about reclaiming something that had been taken or misunderstood.</p>
      <p>to this day, whenever i oil my scalp or take my braids down, i feel like i’m in conversation with generations of women who did the same thing some in kitchens, some in salons, some in front of webcams teaching the world that our beauty doesn’t need permission.</p>
      `,
      audio: 'SpotiDownloader.com - Don\'t Touch My Hair (feat. Sampha) - Solange.mp3',
      image: 'solange.webp'
    },
    {
      id: 'p-10925',
      title: '10.9.25',
      date: '10.9.25',
      mood: 'introspective 🧩',
      song: 'Video Girl – FKA twigs',
      snippet:'being a girl is… complicated. especially being a black girl...',
      content: `
     <p>being a girl is… complicated. especially being a black girl. the world starts making rules for your body before you even know what your body means. i remember being in middle school, wearing a tank top because it was 90 degrees, and being told it was “too distracting.” i didn’t even understand what that meant distracting to who? from what?</p>
      <p>that was the first time i realized that girlhood wasn’t something you fully owned. the way people looked at me teachers, strangers, even relatives made me aware of my body in a way i never asked for. it’s something i’ve been unlearning ever since.</p>
      <p>when i read Tiffany Jackson’s <em>Grown</em> or even the Planned Parenthood article about how school dress codes perpetuate racism and sexism, i felt that same ache. because it’s true black and brown girls are so often seen as older, more adult, more responsible for the way others perceive them. meanwhile, we’re just trying to exist.</p>
      <p>sometimes i think about how long it took me to be soft again. for years, i tried to disappear under baggy clothes and silence. i thought safety meant shrinking. now i know softness is a kind of rebellion wearing what i want, taking up space, laughing loudly, being complicated and unbothered all at once.</p>
      <p>girlhood doesn’t end when you grow up. it just keeps finding new ways to exist inside you.</p>
      `,
      audio: 'SpotiDown.App - Video Girl - FKA twigs.mp3',
      image: 'fka.jpg'
    },
    {
      id: 'p-101125',
      title: '10.11.25',
      date: '10.11.25',
      mood: 'nostalgic 💭',
      song: 'Electric Lady (feat. Solange) – Janelle Monáe',
      snippet: 'i used to lose entire afternoons to girlsgogames.com...',
      content: `
      <p>i used to lose entire afternoons to girlsgogames.com. i’d sit in front of the family computer, that chunky monitor humming, and click through outfit after outfit, hair after hair, face after face. it was like being a stylist for a world that didn’t exist or maybe one i wished did.</p>
      <p>but even in those fantasy worlds, the same reality crept in: none of the characters ever looked like me. the hair was always straight, or maybe “wavy” if the game was being generous. the skin tones stopped at “tan.” i’d still play for hours, picking the most racially ambiguous avatar and pretending it was me.</p>
      <p>i think that’s why i loved customizing things so much. it was the one place where i could tweak and change and dream about representation that didn’t exist yet. years later, when indie creators started releasing games with dark-skinned avatars, 4c curls, or box braids, it felt like something had come full circle.</p>
      <p>those simple pixelated games taught me design, color, patience but they also taught me imagination as survival. to make space for myself where none was offered. to build a softer world, one outfit at a time.</p>
      `,
      audio: 'SpotiDown.App - Electric Lady _feat. Solange_ - Janelle Monáe.mp3',
      image: 'JanelleMonáe.png'
    },
     {
      id: 'p-102025',
      title: '10.20.25',
      date: '10.20.25',
      mood: 'grateful 💖',
      song: 'Self Love (with Ari Lennox & Bas feat. Baby Rose)',
      snippet:'i’ve been scrolling through these old posts...',
      content: `
<p>i’ve been scrolling through these old posts and honestly, it feels like flipping through an old yearbook. like, you remember who you were, but you also see all the versions of yourself you’ve been since then the awkward, the funny, the insecure, the trying-too-hard all of it.</p>
        <p>sometimes i wonder how much of me was shaped by the internet how many of my thoughts, insecurities, even my sense of beauty came from trying to find a reflection in pixels and comment sections. and still, i wouldn’t trade it.</p>
        <p>because somewhere between the youtube tutorials, the tumblr reblogs, and the myspace surveys, i found pieces of myself i didn’t even know i was looking for. i think that’s what being a black girl online taught me that we’ve always made space out of nothing. we built whole communities from gifs and usernames.</p>
        <p>we turned “representation” into inside jokes, memes, and care posts. we taught each other how to love our curls, how to speak up, how to be soft without apology.</p>
        <p>now, things look different. the feeds move faster. everything’s curated and polished. but i still miss when the internet felt like a bedroom messy, personal, full of half-thoughts and heart emojis. when people shared because they needed to, not because they had to.</p>
        <p>so maybe this is my way of getting back to that a digital diary that doesn’t need to be perfect, just honest.</p>
        <p>if you’ve read this far, thank you. for real.</p>
        <p>this space started out as me trying to remember who i was — but now, it feels more like a love letter to every black girl who ever felt too awkward, too loud, too soft, or too much.</p>
        <p>you’re not.</p>
        <p>brb,<br>🩶 — s.</p>
      `,
      audio: 'SpotiDown.App - Self Love _with Ari Lennox _ Bas feat. Baby Rose_ - Dreamville.mp3',
      image: 'ari.png'
    },
  ];

  /* ================ */
  /* DOM references  */
  /* ================ */
  const postsContainer = document.querySelector('.posts');
  const modal = document.getElementById('modal');
  const sheetContent = document.getElementById('sheetContent');

  const newPostBtn = document.getElementById('newPostBtn');
  const entryModal = document.getElementById('entryModal');
  const closeEntryModal = document.getElementById('closeEntryModal');
  const saveEntry = document.getElementById('saveEntry');

  /* ============================
     =  localStorage handling   =
     ============================ */
  const savedPosts = JSON.parse(localStorage.getItem('userPosts')) || [];
  const allPosts = [...posts, ...savedPosts];

  /* ============================
     =  Helpers                 =
     ============================ */
  function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  }

  /* ============================
     =  Render post grid         =
     ============================ */
  function renderPosts() {
    postsContainer.innerHTML = allPosts
      .map(p => `
        <div class='post' data-id='${p.id}'>
          <span class='sticker'>${p.mood || ''}</span>
          <div class='title'>${escapeHtml(p.title)}</div>
          <div class='snippet'>
            ${p.snippet ? escapeHtml(p.snippet) : (p.content ? stripHtml(p.content).slice(0, 120) + '...' : '')}
          </div>
        </div>
      `)
      .join('');
  }

  renderPosts();

  /* ============================
     =  Open post modal logic   =
     ============================ */
  postsContainer.addEventListener('click', e => {
    const card = e.target.closest('.post');
    if (!card) return;
    const post = allPosts.find(x => x.id == card.dataset.id);
    if (post) openPost(post);
  });

  function openPost(post) {
    const isUserPost = savedPosts.some(sp => sp.id === post.id);

    sheetContent.innerHTML = `
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

      <div class='modal-actions' style="margin-top:16px; display:flex; gap:12px; justify-content:flex-end;">
        ${isUserPost ? `<button class='btn delete-btn' id='deletePostBtn' data-id='${post.id}'>Delete ✦</button>` : ''}
        <button class='btn muted' id='closeModalBtn'>Close ✦</button>
      </div>
    `;

    modal.classList.add('open');

    // Close button
    const closeBtn = document.getElementById('closeModalBtn');
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('open'));

    // Background click closes
    modal.addEventListener('click', function modalBgHandler(e) {
      if (e.target === modal) {
        modal.classList.remove('open');
        modal.removeEventListener('click', modalBgHandler);
      }
    });

    // Delete button
    const deleteBtn = document.getElementById('deletePostBtn');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', () => {
        if (!confirm('Delete this post?')) return;
        const id = deleteBtn.dataset.id;

        const index = savedPosts.findIndex(p => p.id === id);
        if (index !== -1) {
          savedPosts.splice(index, 1);
          localStorage.setItem('userPosts', JSON.stringify(savedPosts));
        }

        const allIndex = allPosts.findIndex(p => p.id === id);
        if (allIndex !== -1) allPosts.splice(allIndex, 1);

        modal.classList.remove('open');
        renderPosts();
      });
    }
  }

  /* ============================
     =  NEW ENTRY / SAVE HANDLER =
     ============================ */
  newPostBtn.addEventListener('click', () => {
    document.getElementById('entryTitle').value = '';
    document.getElementById('entryMood').value = '';
    document.getElementById('entrySong').value = '';
    document.getElementById('entryAudio').value = '';
    document.getElementById('entrySnippet').value = '';
    entryModal.classList.add('open');
  });

  closeEntryModal.addEventListener('click', () => {
    entryModal.classList.remove('open');
  });

  saveEntry.addEventListener('click', () => {
    const title = document.getElementById('entryTitle').value.trim();
    const mood = document.getElementById('entryMood').value.trim();
    const song = document.getElementById('entrySong').value.trim();
    const audio = document.getElementById('entryAudio').value.trim();
    const snippetText = document.getElementById('entrySnippet').value.trim();

    if (!title || !snippetText) {
      alert('Please provide a title and some content for your entry.');
      return;
    }

    const contentHtml = `<p>${escapeHtml(snippetText)}</p>`;

    const newPost = {
      id: `p-${Date.now()}`,
      title,
      date: new Date().toLocaleDateString(),
      mood: mood || '📝',
      song,
      snippet: stripHtml(contentHtml).slice(0, 140),
      content: contentHtml,
      audio,
      image: ''
    };

    savedPosts.push(newPost);
    localStorage.setItem('userPosts', JSON.stringify(savedPosts));

    allPosts.push(newPost);
    renderPosts();
    entryModal.classList.remove('open');
  });

  /* ============================
     =  CHARACTER SLIDER         =
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

      const cursorSVG = encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' height='32' width='32'><text y='22' font-size='20'>${char.cursor}</text></svg>`
      );
      const cursorData = `url("data:image/svg+xml;utf8,${cursorSVG}") 0 0, auto`;

      document.body.style.cursor = cursorData;
      document.querySelectorAll('*').forEach(el => (el.style.cursor = cursorData));

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
     =  GALLERY LIGHTBOX LOGIC   =
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
