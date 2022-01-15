
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
  
  onMount(async() => {
    isMounted = true;
    const os = await import('opensea-js');
    console.log('OpenSeaPort',os)
  });

</script>

<style>

  iframe {
    border:0px;
  }

  pre {
    
    overflow: scroll;
    width: 100%;
  }

  .previewFrame {
    width:150px;
    height:150px;
    border:solid 5px #171717;
    background:#e4e4e4
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
    <h1>Convert Flat NFT to 3D</h1>
    <p>
      This is a demo of how we can convert Flat NFTs and bring them to life with Mixed Reality and Virtual Reality within the Metaverse!
    </p>

  </article>
  <hr />
  <article>

    <div class="generatorWrapper">
      <div>
        <input type="text" value="" placeholder="Enter an opensea NFT address" />
        <button>Generate</button>
        <h4>Opensea info</h4>
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
        <div class="previewFrame"><div>
      </div>
    </div>
  </article>
</section>