<template>
  <section id="contact" class="py-5">
    <div class="container">
      <form
        action="forms/contact.php"
        method="post"
        role="form"
        class="php-email-form"
      >
        <div class="row">
          <div class="col-md-12 mb-3">
            <div class="form-group">
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Your Name"
                required=""
              />
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required=""
              />
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required=""
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required=""
              ></textarea>
            </div>
          </div>
          <div class="col-md-12 text-center">
            <button type="submit" class="btn btn-dark">Send Message</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url("~assets/img/gorge.jpg");
  background-size: cover;
  background-position: center;
}
</style>