<template>
  <section class="py-5">
    <div class="container pb-3 px-5 px-md-3">
      <div
        class="d-flex justify-content-between align-items-center mb-4 flex-wrap"
      >
        <h1 class="font-weight-normal text-white text-center display-5">
          Recent Reads
        </h1>
        <p class="mb-0 small">
          <a
            href="https://www.goodreads.com/user/show/17461770-michael"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white"
            style="text-decoration: none"
            >Follow me on GoodReads
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-external-link"
            >
              <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
              ></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </p>
      </div>
      <div class="row gx-md-5 gy-4">
        <div class="col-6 col-sm-6 col-md-3">
          <img
            src="~/assets/img/chamber-of-secrets.jpg"
            alt="Harry Potter and the CHamber of Secrets by J.K. Rowling"
            class="w-100"
          />
        </div>
        <div class="col-6 col-sm-6 col-md-3">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81-349iYbfL.jpg"
            alt="Where The Crawdads Sing cover"
            class="w-100"
          />
        </div>
        <div class="col-6 col-sm-6 col-md-3">
          <img
            src="~/assets/img/modern-romance.jpg"
            alt="Modern Romance"
            class="w-100"
          />
        </div>
        <div class="col-6 col-sm-6 col-md-3">
          <img
            src="~/assets/img/long-before-luther.jpg"
            alt="Long Before Luther"
            class="w-100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url("~assets/img/bg__currently-reading.jpg");
  background-size: cover;
  background-position: center;
  .container {
    max-width: 1140px;
    .feather {
      height: 0.8rem;
      width: auto;
      margin-bottom: 3px;
      margin-left: 3px;
    }
  }
}
</style>