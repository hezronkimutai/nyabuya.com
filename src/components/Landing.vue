<template>
  <div class="min-h-screen">
  <div class="container-inner mx-auto flex flex-col justify-center text-center items-center min-h-3">
    <h1 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black dark:text-white">Designer, Full-stack web Developer &amp; Blogger</h1>
    <h5 class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light mb-10">I code simple things, and I love what I do.</h5>
    <g-image src="~/assets/svg/meme.svg" class="mb-10 dark:fill-dark" width="300" fit="contain" quality="100"/>
  </div>
  <div class="container-inner mx-auto">
    <g-image src="~/assets/svg/hackericon.svg" width="600" height="300"/>
    <div class="svg-icon" />
  </div>
  <div class="relative flex flex-col content-center justify-center">
    <div class="relative bg-purple-450 dark:bg-purple-700 text-white min-h-2">
      <div class="container-inner mx-auto">
        <div class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center">
          <div class="pt-20">
          <h1 class='font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-none sm:leading-tight md:leading-normal lg:leading-relaxed xl:leading-loose mb-4'>What's up. I'm Bonvic, Nice to meet you</h1 >
            <p class="font-light">
              I'm a Full-stack developer, currently based in beautiful Kigali, Rwanda.
              I enjoy turning complex problems into simple, beautiful and intuitive. When I'm not coding, tweeting or writing, you'll find me watching movies, walking around the city or Reading books.
          </p>
        </div>
        </div>
      </div>
    </div>
    <div class="w-full min-h-2 z-50 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 xl:-mt-32">
      <div class="bg-white w-11/12 min-h-2 dark:bg-grey-900 shadow-2xl mx-auto rounded-lg">
        <div class="flex justify-around">
          <div class="m border-gray-600  border-r-2">you</div>
          <div class="m border-gray-600 border-r-2">me</div>
          <div class="m border-gray-600 border-r-2">us</div>
        </div>
      </div>
    </div>
    <div class="min-h-screen dark:bg-grey-900 relative"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data(){
			return{
				hackericon: "Rohith"
			}
		}
  };
</script>

<style>
.h-80 {
  height: 70vh
}
.-mt-50 {

}
</style>
