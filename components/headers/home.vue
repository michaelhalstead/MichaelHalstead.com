<template>
  <header class="pt-5" ref="header">
    <div
      class="container text-center py-5 d-flex align-items-center justify-content-center"
    >
      <h1 class="display-1 mb-1 font-weight-normal">
        I'm a <span class="typed-text" ref="typedTextSpan"></span
        ><span class="cursor" ref="cursorSpan">&nbsp;</span>
      </h1>
    </div>
    <div class="icon-scroll"></div>
  </header>
</template>

<script>
export default {
  data: () => ({
    textArray: [
      "developer",
      "writer",
      "Christian",
      "cook",
      "math geek",
      "dog lover",
      "beer nerd",
      "coffee lover",
      "human",
    ],
    typingDelay: 200,
    erasingDelay: 100,
    newTextDelay: 2000,
    textArrayIndex: 0,
    charIndex: 0,
    cursorSpan: "",
    scrollY: 0,
  }),
  methods: {
    type: function () {
      let cursorSpan = this.$refs.cursorSpan;
      let typedTextSpan = this.$refs.typedTextSpan;

      if (this.charIndex < this.textArray[this.textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent += this.textArray[this.textArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex++;
        setTimeout(this.type, this.typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(this.erase, this.newTextDelay);
      }
    },
    erase: function () {
      let cursorSpan = this.$refs.cursorSpan;
      let typedTextSpan = this.$refs.typedTextSpan;

      if (this.charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent = this.textArray[
          this.textArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(this.erase, this.erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        this.textArrayIndex++;
        if (this.textArrayIndex >= this.textArray.length)
          this.textArrayIndex = 0;
        setTimeout(this.type, this.typingDelay + 1100);
      }
    },
    setOffset: function () {
      const scrollY = -(window.pageYOffset * 0.1);
      // Do nothing if the end of the parallax effect is already reached (less processing time)
      if (scrollY < 160) {
        const offset = `${scrollY}px`;
        this.$refs.header.style.backgroundPositionY = offset;
      }
    },
  },
  mounted: function () {
    this.type();
    window.addEventListener("scroll", this.setOffset);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.setOffset);
  }
};
</script>

<style lang="scss" scoped>
header {
  margin-top: -66px;
  color: #cecece;
  background-color: #16130f;
  background-image: url("../../assets/img/hero__home.jpg");
  background-position: top center;
  background-size: cover;
  height: 100vh;
  position: relative;
}

.container {
  margin-top: 66px;
  height: calc(100% - 66px);
}

.container h1 {
  overflow: hidden;
  line-height: 1.5;
}

.container h1 span.cursor {
  display: inline-block;
  background-color: #ccc;
  margin-left: 0.1rem;
  width: 3px;
  animation: blink 1s infinite;
}
.container h1 span.cursor.typing {
  animation: none;
}
@keyframes blink {
  0% {
    background-color: #ccc;
  }
  49% {
    background-color: #ccc;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
  100% {
    background-color: #ccc;
  }
}

.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}
.icon-scroll {
  width: 20px;
  height: 35px;
  margin-left: -20px;
  bottom: 1.5rem;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;
}
.icon-scroll:before {
  content: "";
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: scroll;
  animation-name: scroll;
}
@-webkit-keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(23px);
  }
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(23px);
  }
}
</style>