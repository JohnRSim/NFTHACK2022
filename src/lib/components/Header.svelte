<script>
</script>

<header class="header-container">
  <a aria-label="Jump to Home page" class="hover-jump" href="./">
    <img width="160" src="/logo.png" alt="THE IMR Experience" />
  </a>
  <nav class="nav">
    <ul>
      <li><a href="/.">Home</a></li>
      <li><a href="/snap">Snapchat</a></li>
      <li><a href="/social">Social Share</a></li>
      <li><a href="/mobile">Mobile AR Launcher</a></li>
      <li><a href="/convert">Convert Flat NFT to 3D</a></li>
      <li><a href="/wallet">Metaverse Wallet</a></li>
    </ul>
  </nav>
</header>

<style lang="scss">
  .header-container {
    display: flex;
    align-items: flex-end;
    max-width: 1000px;/*$max-width-wrapper;*/
    width: 100%;
    margin: $spacing-0 auto $spacing-12;
  }

  .nav {
    display: flex;
    margin-left: auto;
    list-style-type: none;

    ul {
      display: flex;
      align-items: flex-end;
      padding-bottom: 0;
      margin-bottom: $spacing-0;

      li {
        display: flex;
        font-size: 1.2rem;/*$font-size-4*/;
        margin-left: $spacing-6;
        margin-bottom: $spacing-1;
      }
    }
  }

  .logo {
    color: $color-theme-1;
  }

  @media (prefers-reduced-motion: no-preference) {
    .hover-jump {
      transition: all 0.25s ease-in-out;
    }
  }

  .hover-jump:focus,
  .hover-jump:hover {
    transform: translateY(-$spacing-2);
  }
</style>
