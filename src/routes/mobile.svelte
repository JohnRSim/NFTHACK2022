
<script>
	import { onMount } from 'svelte';

  import ogSquareImageSrc from '$lib/assets/home/home-open-graph-square.jpg';
  import ogImageSrc from '$lib/assets/home/home-open-graph.jpg';
  import twitterImageSrc from '$lib/assets/home/home-twitter.jpg';
  import featuredImageSrc from '$lib/assets/home/home.jpg';
  //import BlogRoll from '$lib/components/BlogRoll.svelte';
  //import Card from '$lib/components/Card.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  import website from '$lib/config/website';

  let { author, siteUrl } = website;

  let title = '3D Twitter Card NFT Generator Example';
  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
  ];
  let metadescription = '';
  const featuredImageAlt = '';
  const featuredImage = {
    url: featuredImageSrc,
    alt: featuredImageAlt,
    width: 672,
    height: 448,
    caption: 'test',
  };
  const ogImage = {
    url: ogImageSrc,
    alt: featuredImageAlt,
  };
  const ogSquareImage = {
    url: ogSquareImageSrc,
    alt: featuredImageAlt,
  };

  const twitterImage = {
    url: twitterImageSrc,
    alt: featuredImageAlt,
  };
  const entityMeta = {
    url: `${siteUrl}/`,
    faviconWidth: 512,
    faviconHeight: 512,
    caption: author,
  };

  const opensea3DAsset = 'https://storage.opensea.io/files/c0bf8dadebe20f730940bb5acc5a0f55.glb';
  const openseaAlt= 'Crypto Horse: Sushi Swap';
  const openseaPoster = 'https://lh3.googleusercontent.com/6IgnSG5Nm84tHaseN2xLvYDE8HpnECabZ6qD1knvHTdJ4FnFZMntPd728EUgJtVzBSSuhfnGfgL5lm1NC-9jAupYI49TC96MDWqDhg=w386'
  const seoProps = {
    title,
    slug: '',
    entityMeta,
    datePublished: '2021-07-07T14:19:33.000+0100',
    lastUpdated: '2021-07-07T14:19:33.000+0100',
    breadcrumbs,
    metadescription,
    featuredImage,
    ogImage,
    ogSquareImage,
    twitterImage: {url: openseaPoster},
    playerURL: `https://nfthack2022.netlify.app/player/3DViewer.html?src=${opensea3DAsset}&poster=${openseaPoster}&alt=${openseaAlt}`
  };

  let isMounted = false;
  
  onMount(async() => {
    isMounted = true;
    siteUrl = siteUrl || window.location.origin;
  });


  function load3DAsset() {
    const arViewer = document.getElementById('viewer');
    console.log('loading',arViewer);
    arViewer.activateAR();
  }
</script>

<style>
    /* This keeps child nodes hidden while the element loads */
    :not(:defined) > * {
    display: none;
  }

  model-viewer {
    background-color: #eee;
    overflow-x: hidden;
    --poster-color: #eee;
  }

  #ar-button {
    background-image: url(../../assets/ic_view_in_ar_new_googblue_48dp.png);
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 12px 50%;
    background-color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    bottom: 132px;
    padding: 0px 16px 0px 40px;
    font-family: Roboto Regular, Helvetica Neue, sans-serif;
    font-size: 14px;
    color:#4285f4;
    height: 36px;
    line-height: 36px;
    border-radius: 18px;
    border: 1px solid #DADCE0;
  }

  #ar-button:active {
    background-color: #E8EAED;
  }

  #ar-button:focus {
    outline: none;
  }

  #ar-button:focus-visible {
    outline: 1px solid #4285f4;
  }

  @keyframes circle {
    from { transform: translateX(-50%) rotate(0deg) translateX(50px) rotate(0deg); }
    to   { transform: translateX(-50%) rotate(360deg) translateX(50px) rotate(-360deg); }
  }

  @keyframes elongate {
    from { transform: translateX(100px); }
    to   { transform: translateX(-100px); }
  }

  model-viewer > #ar-prompt {
    position: absolute;
    left: 50%;
    bottom: 175px;
    animation: elongate 2s infinite ease-in-out alternate;
    display: none;
  }

  model-viewer[ar-status="session-started"] > #ar-prompt {
    display: block;
  }

  model-viewer > #ar-prompt > img {
    animation: circle 4s linear infinite;
  }

  model-viewer > #ar-failure {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 175px;
    display: none;
  }

  model-viewer[ar-tracking="not-tracking"] > #ar-failure {
    display: block;
  }

  .slider {
    width: 100%;
    text-align: center;
    overflow: hidden;
    position: absolute;
    bottom: 16px;
  }

  .slides {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }

  .slide {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fff;
    margin-right: 10px;
    border-radius: 10px;
    border: none;
    display: flex;
  }

  .slide.selected {
    border: 2px solid #4285f4;
  }

  .slide:focus {
    outline: none;
  }

  .slide:focus-visible {
    outline: 1px solid #4285f4;
  }
</style>


<SEO {...seoProps} />

<section>
  <article>
    <h1>Bringing your NFT into Reality with a mobile device!</h1>
    <p>
      To make a more immersive experience and enhance the visual display of NFTs it is possible to launch from the web an direct Mixed Reality experience by taking the 3D NFT and placing it in your home for you to explore the asset in more detail in a 3D space.
    </p>
    <p>
      You can use Googles native 3D viewer and launch the 3D NFT Asset into there but I ran into issues with GLB not loading so pulled the asset into WebXR which ran without issues.
    </p>

    <!--<a target="_blank" href="https://modelviewer.dev/editor/view/?id=31048266482634015000">Launch 3D NFT</a>-->
    
    <model-viewer 
      src="https://storage.opensea.io/files/875ff4284b671d7ff9ac12cc8e5076cf.glb" 
      poster="https://lh3.googleusercontent.com/IpOZIP5Kut6uwGD3uQP6_GtGvi0P-bBPWbft1LnI2p5vPv3bS6QoZpyjubuZXha--nmuMRK8P8Z353McyeCe3sI-bGft3A0YfT4BMt4=w1400-k" 
      shadow-intensity="1" 
      ar 
      ar-modes="webxr scene-viewer quick-look" 
      camera-controls 
      style="min-height:500px; width:100%"
      alt="A">
      
      <button slot="ar-button" id="ar-button">
        View in your space
      </button>

      <div id="ar-prompt">
        <img src="/hand.png" alt="">
      </div>

      <button id="ar-failure">
        AR is not tracking!
      </button>

      <!--<div class="slider">
        <div class="slides">
          <button class="slide selected" onclick="switchSrc(this, 'Chair')" style="background-image: url('../../assets/ShopifyModels/Chair.png');">

          </button><button class="slide" onclick="switchSrc(this, 'Mixer')" style="background-image: url('../../assets/ShopifyModels/Mixer.png');">

          </button><button class="slide" onclick="switchSrc(this, 'GeoPlanter')" style="background-image: url('../../assets/ShopifyModels/GeoPlanter.png');">
          
          </button><button class="slide" onclick="switchSrc(this, 'ToyTrain')" style="background-image: url('../../assets/ShopifyModels/ToyTrain.png');">
          
          </button><button class="slide" onclick="switchSrc(this, 'Canoe')" style="background-image: url('../../assets/ShopifyModels/Canoe.png');">    
        </button></div>
      </div>-->
    </model-viewer>

    <!--<model-viewer 
      class="viewer" 
      id="viewer" 
      ar 
      ar-modes="scene-viewer quick-look" 
      ar-scale="auto" 
      environment-image="neutral" 
      src="https://storage.opensea.io/files/875ff4284b671d7ff9ac12cc8e5076cf.glb" 
      alt="" 
      camera-controls auto-rotate ></model-viewer>-->
    <!--<model-viewer 
      id="viewer"
      auto-rotate="true" 
      autoplay="true" 
      camera-controls="true" 
      class="ModelScene--viewer" 
      src="https://storage.opensea.io/files/c0bf8dadebe20f730940bb5acc5a0f55.glb" 
      ar-status="not-presenting"></model-viewer>

      <button on:click="{load3DAsset}">Launch in Viewer</button>-->
  </article>
</section>