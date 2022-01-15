
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

  const { author, siteUrl } = website;

  let title = 'Home';
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
    caption: 'Home page',
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
    twitterImage,
  };

  
  onMount(async() => {
    
  });

</script>

<style>
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
      The player uses the https://github.com/google/model-viewer web component and passes params via the address bar to display 3D GLB content. 
    </p>

  </article>
</section>