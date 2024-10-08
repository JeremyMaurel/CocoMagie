function getLastVideo() {
  const loadVideo = (iframe) => {
    const cid = 'UCVEaVfyrGQ0aP9wzMjkHQEw';
    const channelURL = encodeURIComponent(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`
    );
    const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

    fetch(reqURL)
      .then((response) => response.json())
      .then((result) => {
        const videoNumber = iframe.getAttribute('vnum');
        const link = result.items[videoNumber].link;
        const id = link.substr(link.indexOf('=') + 1);
        iframe.setAttribute(
          'src',
          `https://youtube.com/embed/${id}`
        );
        iframe.setAttribute('title', 'YouTube video player');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
       
      })
      .catch((error) => console.log('error', error));
  };

  const iframes = document.getElementsByClassName('latestVideoEmbed');
  for (let i = 0, len = iframes.length; i < len; i++) {
    loadVideo(iframes[i]);
  }
}

export default getLastVideo;
