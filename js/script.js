document.addEventListener('DOMContentLoaded', () => {
    var myPlayer = new BootstrapVideoplayer('myPlayer',{
        selectors:{
          video: '.video'
        }
    })
  })

  document.addEventListener('DOMContentLoaded', () => {
    var myPlayer = new BootstrapVideoplayer('myPlayer',{
        selectors:{
          video: '.video',
          playPauseButton: '.btn-video-playpause',
          playIcon: '.bi-play-fill',
          pauseIcon: '.bi-pause-fill',
          progress: '.progress',
          progressbar: '.progress-bar',
          pipButton: '.btn-video-pip',
          fullscreenButton: '.btn-video-fullscreen',
          volumeRange: '.form-range-volume'
        }
    })
  })

  