
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
    arViewer.activateAR();
  }
</script>

<style>
  iframe {
    border:0px;
  }

  pre {
    
    overflow: scroll;
    width: 100%;
  }
</style>


<SEO {...seoProps} />

<section>
  <article>
    <h1>Bringing your NFT into Reality with a mobile device!</h1>
    <p>
      To make a more immersive experience and enhance the visual display of NFTs it is possible to launch from the web an direct Mixed Reality experience by taking the 3D NFT and placing it in your home for you to explore the asset in more detail in a 3D space.
    </p>

    <model-viewer 
      id="viewer"
      auto-rotate="true" 
      autoplay="true" 
      camera-controls="true" 
      class="ModelScene--viewer" 
      src="https://storage.opensea.io/files/c0bf8dadebe20f730940bb5acc5a0f55.glb" 
      ar-status="not-presenting"></model-viewer>

      <button on:click="{load3DAsset}">Launch in Viewer</button>
  </article>
</section>