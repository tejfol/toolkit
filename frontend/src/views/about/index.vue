<template>
  <div class="p-4 space-y-32 about-bg xl:scroll-mt-[180px]">
    <main id="1" class="container px-4 mx-auto space-y-4 text-white">
      <section
        class="grid grid-cols-1 md:grid-cols-2 items-center tablet:h-90vh"
      >
        <div class="space-y-4 py-12">
          <p class="text-5xl">
            Created by <span class="font-semibold">Matei Mark</span>
          </p>
          <p class="text-4xl">
            <span class="text-gray-400">I'm a </span>frontend developer
          </p>
          <div class="space-y-4">
            <button
              @click="scrollToView"
              class="
                bg-gray-500
                font-semibold
                px-5
                py-4
                rounded
                border border-transparent
                hover:bg-gray-700 hover:border hover:border-white
                transition-all
              "
            >
              Contact with me
            </button>
            <div class="w-fit flex space-x-4">
              <a
                class="self-center"
                href="https://www.linkedin.com/in/matei-mark-761205183/"
              >
                <picture>
                  <img
                    width="24"
                    height="24"
                    class="w-6 h-6 rounded-md"
                    src="../../assets/svg/linkedin.svg"
                    alt="linked-in-link"
                  />
                </picture>
              </a>
              <a class="self-center" href="https://t.me/mateimark">
                <picture>
                  <img
                    width="24"
                    height="24"
                    class="w-6 h-6 rounded-md"
                    src="../../assets/svg/telegram.svg"
                    alt="linked-in-link"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
        <div
          class="
            hidden
            md:block
            w-full
            custom-shadow
            rounded-lg
            border border-gray-300/50
          "
        >
          <div
            class="
              flex
              w-full
              justify-center
              items-center
              text-gray-300 text-xs
              py-1
              px-2
              border-b border-gray-100/50
              rounded-t-lg
            "
          >
            <p>[~/whoami] (-fish)</p>
            <span class="ml-auto">⌘1</span>
          </div>
          <div class="flex p-1 terminal-bg">
            <div class="block text-sm">
              <div class="flex">
                <p class="px-1 bg-green-500/80 font-semibold text-gray-800">
                  tejfol
                </p>
                <p class="px-1 bg-green-200/80 font-semibold text-gray-800">
                  {{ timestamp }}
                </p>
                <p class="px-1 bg-gray-900/80 font-semibold text-green-100">
                  ~/whoami
                </p>
                <p class="px-2">&gt;</p>
              </div>
            </div>
            <picture>
              <img
                width="750"
                height="1107"
                class="pl-1 pr-12 pb-12 desktop:w-max-sm"
                src="../../assets/images/profile-image-bw-original.png"
                alt="profile picture"
              />
            </picture>
          </div>
        </div>
      </section>
    </main>
    <div id="contact_me">
      <form
        action="mailto:matei.mark-lukas@student.uzhnu.edu.ua"
        method="post"
        enctype="text/plain"
        class="flex flex-col gap-4 lg:w-6/12 mx-auto text-white"
      >
        <div class="text-3xl font-semibold text-center">
          <h1>If you have any question, Please don't hesitate let me know.</h1>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col">
            <label class="required" for="name">Your name:</label>
            <input
              id="name"
              class="input text-gray-700"
              name="name"
              type="text"
              value=""
              size="30"
              placeholder="Name"
            />
            <span class="error_message"></span>
          </div>
          <div class="flex flex-col">
            <label class="required" for="email">Your email:</label>
            <input
              id="email"
              class="input text-gray-700"
              name="email"
              type="text"
              value=""
              size="30"
              placeholder="Email"
            />
            <span class="error_message"></span>
          </div>
        </div>
        <div class="flex flex-col">
          <label class="required" for="message">Your message:</label>
          <textarea
            id="message"
            class="input text-gray-700"
            name="message"
            rows="7"
            cols="30"
            placeholder="Enter your text here..."
          ></textarea>
          <span class="error_message"></span>
        </div>

        <input
          class="
            transition-all
            px-4
            py-2
            bg-main-blue
            rounded-md
            text-white
            font-semibold
            outline-none
            border border-transparent
            hover:bg-white
            hover:border
            hover:border-main-blue
            hover:text-main-blue
            cursor-pointer
            ml-auto
            block
          "
          type="submit"
          value="Send email"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  methods: {
    scrollToView() {
      const el = document.getElementById('contact_me');
      el.scrollIntoView({behavior: "smooth"});
    }
  },
  computed: {
    timestamp() {
      const today = new Date();
      return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    }
  },
};

</script>

<style scoped>
.about-bg {
  background: linear-gradient(to bottom, #202020, #111119);
}
</style>