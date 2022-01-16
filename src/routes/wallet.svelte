
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

  //let Moralis;
  /* Moralis init code */
  const serverUrl = 'https://up4dw9h6ggww.usemoralis.com:2053/server';
  const appId = 'vq18qD9kJiueOdtWq6qzQXPwTCuRpHRCjxYD0sRh';

  $:userNFTs = [];

  onMount(async() => {
    //Moralis = await import('moralis/dist/moralis.min.js');
    
    await Moralis.start({ serverUrl, appId });
    //autologin
    //login();
    getNFTs();
  });

  let user = false;
  /**
   * login
   */
  async function login() {
    console.log('[login]')
    user = Moralis.User.current();
    console.log('[login]',user)
    if (!user) {
      user = await Moralis.authenticate({ signingMessage: "Log in to The IMR Bridge via the Moralis SDK" })
        .then(function (user) {
          console.log("logged in user:", user);
          getNFTs();
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      
      getNFTs();
    }
  }
  
  /**
   * logOut
   */
  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }

  /**
   * getNFTs
   */
  async function getNFTs() {
    
    if (!user) {
      login();
      return;
    }
    const userEthNFTs = await Moralis.Web3API.account.getNFTs({ chain: 'rinkeby' });
    console.log('userEthNFTs',userEthNFTs.result);
    const hasNFTs = userEthNFTs.result.filter((nft) => {
      if (nft.metadata !== null) {
        nft.metadata = JSON.parse(nft.metadata);
      }
      return (nft.metadata !== null);
    });
    console.log('hasNFTs',hasNFTs)
    userNFTs = hasNFTs;
  }


  /**
   * getImg
   */
  function getImg(path) {
    if (path.startsWith('ipfs')) {
        let splitPath = path.replace(/ipfs:\/\//g,'').split('/');
        //console.log(splitPath);
        path = `https://${splitPath[0]}.ipfs.infura-ipfs.io/${splitPath[1]}`
    }

    return path;
  }

  /**
   * 
   */
  function checkExt(assetURL) {
    const ext =  assetURL.split('.').pop();
    console.log(ext)
    return ((ext === 'png') || (ext === 'jpg')?'img':false);
  }

  function download(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
</script>

<style>

.grid {
	padding:0px;
	margin:0px;
    display: grid;
    grid-gap: 18px;
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    list-style: none;
}
.grid li {
    list-style: none;
	transform: translate3d(0, 0, 0);
  display: flex;
}
.card{
	border:solid 2px #000;
	border-radius: 4px;
	position:relative;
	margin:0px;
	cursor:pointer;
  flex:1;
}

figure {
	margin:0px;
  padding:0px;
    position: relative;
}
figure caption {
	position: absolute;
	z-index:5;
	top:0px;
	left:0px;
	right:0px;
	background:rgba(0, 0, 0, 0.5);
	color:#fff;
	padding:8px;
	font-size:0.75em;
	text-align:left;
}
figure img {
  width:100%;
}

.card:hover {
	box-shadow:4px 4px 0px 0px rgba(0,0,0,0.25);;
}
.card:hover footer {
	background:#00e3c6;
}
.card footer {
  flex:1;
	background:#00e3c6;
  display: flex;
  flex-direction: column;
}
.card button {
  flex:1;
  min-height:40px;
}
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
</style>


<SEO {...seoProps} />

<section>
  <article>
    <h1>MetaQuest NFT 3D Wallet</h1>
    <p>
      Creating an easier approach for downloading and displaying your NFT assets within the Metaverse.
    </p>

  </article>

  <article style="margin-bottom:40px">
    {#if (!user)}
    <button on:click="{login}">Connect to Wallet</button>
    {:else}
    <button on:click="{logOut}">Logout</button>
    {/if}
    <button>Connect to VR Metaverse</button>
  </article>

  <article>
    
    <ul class="grid">
      <li>
        <!-- moralis not syncing new opensea nft hardcoding for now.. -->
        <div class="card">
          <figure>
            
            <model-viewer 
              src="/fox.glb" 
              poster="/logo.png" 
              shadow-intensity="1" 
              ar 
              ar-modes="webxr scene-viewer quick-look" 
              camera-controls 
              style="width:100%"
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
            <caption>
              The IMR Experience
            </caption>
            <footer>
              <button on:click="{() => {download('/fox.glb')}}">Download</button>
              <a style="display:block; padding:40px; background:red;" href="/fox.glb" download>fox</a>
            </footer>
          </figure>
        </div>
      </li>
      {#each userNFTs as nft}
        <li>
          

          <div class="card">
            <figure>
              <img src="{getImg(nft.metadata.image)}" alt=""/>
              <caption>
                {nft.metadata.name}
              </caption>
              <footer>
                <button>Download</button>
                {#if (checkExt(nft.metadata.image) === 'img')}
                  <button>Generate 3D</button>
                {/if}
              </footer>
            </figure>
          </div>
        </li>
      {/each}
    </ul>
  </article>
</section>