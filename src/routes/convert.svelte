
<script>
	import { onMount } from 'svelte';

  //import * as Web3 from 'web3';

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
  let url;
  let openseaConnected = false;
  
  onMount(async() => {
    isMounted = true;
    openseaConnected = true;
    /*
    const OS = await import('opensea-js');
    openseaConnected = true;
    console.log('OpenSeaPort',OS)

    const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')
    const seaport = new OpenSeaPort(provider, {
      networkName: OS.Network.Main,
      apiKey: YOUR_API_KEY
    });
    */
  });

  let tokenID;
  async function retrieveAssetInfo() {
    if (!url) {
      alert('Enter an opensea NFT address ie https://opensea.io/assets/0xd07dc4262bcdbf85190c01c996b4c06a461d2430/92070')
      return;
    }

    const OS_address = url.replace(/https:\/\//,'');
    const assetData = OS_address.split('/');

    const contractAddress = assetData[2];
    tokenID = assetData[3];

    console.log(contractAddress,tokenID);
    console.log(assetData);
    /*
    const OpenSeaAsset = await seaport.api.getAsset({
      contractAddress, // string
      tokenID, // string | number | null
    });*/
    gen3D();
  }

  let genModal = '';
  let NFTGenComplete = false;
  function gen3D() {
    if (!url) {
      alert('Enter an opensea NFT address ie https://opensea.io/assets/0xd07dc4262bcdbf85190c01c996b4c06a461d2430/92070')
      return;
    }

    NFTGenComplete = false;
    fetch(`https://api.b-sceneapp.com/nft?NFTUrl=${url}`, {
        method: 'get'
    })
    .then(res => res.json())
    .then((response) => {
      console.log('Success:', JSON.stringify(response))
      genModal = `${response.bsceneUrl.replace(/b-sceneapp.com/,'nfthack2022.netlify.app/l')}models/${tokenID}.glb`
      NFTGenComplete = true;
    })
    .catch((error) => {
      console.error('Error:', error)
      //bug with generator during hackathon for demo swap to static glb
      genModal = `/horse.glb`
      NFTGenComplete = true;
    });
    /*
    {
      "owner":"PAGESVFX2",
      "creator":"PAGESVFX2",
      "title":"Crypto Horse: Sushi Swap",
      "imageUrl":"https://lh3.googleusercontent.com/6IgnSG5Nm84tHaseN2xLvYDE8HpnECabZ6qD1knvHTdJ4FnFZMntPd728EUgJtVzBSSuhfnGfgL5lm1NC-9jAupYI49TC96MDWqDhg=s2500",
      "marketplace":"Opensea",
      "nftUrl":"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/93290888789314140276970432121952459674757115801796959568208263017141295382529","token":"93290888789314140276970432121952459674757115801796959568208263017141295382529",
      "bsceneUrl":"https://b-sceneapp.com/assets/opensea/93290888789314140276970432121952459674757115801796959568208263017141295382529/"
    }
    */
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

  .generatorWrapper {
    display: flex;
    flex-direction: row
    ;
  }
</style>


<SEO {...seoProps} />

<section>
  <article>
    <h1>Convert Flat NFT to 3D.</h1>
    <p>
      This is a demo of how we can convert Flat NFTs and bring them to life with Mixed Reality and Virtual Reality within the Metaverse!
    </p>
    <p style="overflow-wrap: break-word;">
      example link - https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/93290888789314140276970432121952459674757115801796959568208263017141295382529
    </p>
  </article>
  <hr />
  <article>
    {#if (NFTGenComplete)}
      
      <model-viewer 
        src="{genModal}" 
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
  
      </model-viewer>
    {:else}
      {#if (!openseaConnected)}
        Connecting to OpenSea
      {/if}
      <div class="generatorWrapper">
        <div>
          {#if (openseaConnected)}
          <input type="text" bind:value={url} placeholder="Enter an opensea NFT address" />
          <button on:click="{retrieveAssetInfo}">Generate</button>
          <h4>Opensea info</h4>
          {/if}
        </div>
        <div>
          <h4>3D wrapper Model Preview</h4>
          <label>Choose wrapper Model</label>
          <select>
            <option>Default</option>
            <option>Fun</option>
            <option>Experimental</option>
            <option>New Age</option>
          </select>
        </div>
      </div>
    {/if}
  </article>


</section>