<template>
  <div class="text-gray-800 bg-white leading-normal flex flex-col min-h-screen">
    <header class="">
        <nav class="nav h-20 flex flex-wrap items-center justify-between px-4">
      <div class="flex flex-no-shrink items-center mr-6 py-3 text-purple-450">
        <a href="/"><h1 class="font-ram text-3xl  mr-2 text-purple-450 font-bold"> &lt;B /&gt;</h1></a>
      </div>

      <input class="menu-btn hidden" type="checkbox" id="menu-btn">
      <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
        <span class="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
        <li class="border-t md:border-none">
          <a href="/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</a>
        </li>
        
        <li class="border-t md:border-none">
          <a href="/resume/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Resume</a>
        </li>
        
        <li class="border-t md:border-none">
          <a href="/blog/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Blog</a>
        </li>
        
      </ul>
    </nav>
    </header>
    <div class="flex-grow">
      <slot/>
    </div>
    <footer class="bg-purple-450 text-white">
      <div class="container mx-auto flex items-center justify-between py-8">
        <div>copyright 2020. All rights reserved</div>
        <ul class="flex items-center">
          <li class="mr-8">
            <a href="#">A</a>
          </li>
          <li class="mr-8">
            <a href="#">A</a>
          </li>
          <li class="mr-8">
            <a href="#">A</a>
          </li>
          <li class="mr-8">
            <a href="#">A</a>
          </li>
          <li class="mr-8">
            <a href="#">A</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style src='../styles/main.css' />
