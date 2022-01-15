
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
    twitterImage:openseaPoster,
    playerURL: `https://nfthack2022.netlify.app/player/3DViewer.html?src=${opensea3DAsset}&poster=${openseaPoster}&alt=${openseaAlt}`
  };

  let isMounted = false;
  
  onMount(async() => {
    isMounted = true;
    siteUrl = siteUrl || window.location.origin;
  });

</script>

<style>

  iframe {
    border:0px;
  }
</style>


<SEO {...seoProps} />

<section>
  <article>
    <h1>3D Twitter Card NFT Generator</h1>
    <p>
      Currently OpenSea only allows Twitter Social sharing of NFTs listed as image cards.<br />
      However the Twitter platform supports the ability to play content through third party players.
    </p>
    <p>
      This allows us to add support directly in Twitter for users to interact with 3D based models that are shared from OpenSea. 
    </p>

    <p>
      Additionally analytics can added to the viewer to track engagement of NFT assets.
    </p>

    <h3>Tech</h3>
    <p>
      The player uses the Google <a href="https://github.com/google/model-viewer">https://github.com/google/model-viewer</a> web component and passes params via the address bar to display 3D GLB content. 
    </p>

    <h3>Example Opensea NFT Data (Crypto Horse: Sushi Swap)</h3>
    <p>
      OpenSea NFT: <a target="_blank" href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/93290888789314140276970432121952459674757115801796959568208263017141295382529">https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/93290888789314140276970432121952459674757115801796959568208263017141295382529</a><br />
      Flat image preview: <a target="_blank" href="https://lh3.googleusercontent.com/6IgnSG5Nm84tHaseN2xLvYDE8HpnECabZ6qD1knvHTdJ4FnFZMntPd728EUgJtVzBSSuhfnGfgL5lm1NC-9jAupYI49TC96MDWqDhg=w386">https://lh3.googleusercontent.com/6IgnSG5Nm84tHaseN2xLvYDE8HpnECabZ6qD1knvHTdJ4FnFZMntPd728EUgJtVzBSSuhfnGfgL5lm1NC-9jAupYI49TC96MDWqDhg=w386</a><br />
      3D Asset: <a target="_blank" href="https://storage.opensea.io/files/c0bf8dadebe20f730940bb5acc5a0f55.glb">https://storage.opensea.io/files/c0bf8dadebe20f730940bb5acc5a0f55.glb</a><br />
    </p>

    <h3>Example 3D Model loaded from OpenSea Data</h3>
    <iframe title="Example Model" src="{`${siteUrl}/player/3DViewer.html?src=https://storage.opensea.io/files/c0bf8dadebe20f730940bb5acc5a0f55.glb&poster=https://modelviewer.dev/shared-assets/models/NeilArmstrongPoster.webp&alt=Neil%20Armstrong%27s%20Spacesuit%20from%20the%20Smithsonian%20Digitization%20Programs%20Office%20and%20National%20Air%20and%20Space%20Museum`}" />

    <h3>Twitter Social Code</h3>


    <h3>Test it out on Twitter</h3>
    <p>
      Copy the address of this page 
      {#if (isMounted)}<b>{window.location.href}</b>{/if} 
      and paste it into twitter as a new message or test it out at the <a target="_blank" href="https://cards-dev.twitter.com/validator">Twitter card validator</a>.
    </p>
    <p>
      You should see the poster image display first whilst the 3D asset is loading and then see the animated 3D Model.
    </p>
    <img src="/socialCard.PNG" alt="" />
  </article>
</section>