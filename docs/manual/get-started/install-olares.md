<script setup>
   import { ref, computed, onMounted } from 'vue'
   import installOlaresLinux from './install-olares-linux.md'
   import installOlaresRaspberryPi from './install-olares-raspberry-pi.md'
   import installOlaresMac from './install-olares-mac.md'
   import installOlaresInstallOlaresWindows from './install-olares-windows.md'
   import { useData } from 'vitepress'

   const { isDark } = useData()
   const tabActiveIndex = ref(0)
   const randomKey = ref('RandomKey')
   const title = computed(()=> titles[tabActiveIndex.value])
   const titles = ['Install Olares on Linux', 'Install Olares on Mac', 'Install Olares on Windows']

   const icons = ['linux-brands-solid', 'apple-brands-solid', 'windows-brands-solid']
   const icons_light = computed(() => icons.map(item => `/images/manual/icons/${item}.svg`))
   const icons_dark = computed(() => icons.map(item => `/images/manual/icons/${item}-dark.svg`))

   function tabChange(tab, index) {
      tabActiveIndex.value = index
      document.title = `${title.value} | Olares`;
   }

   onMounted(() => {
      document.title = `${title.value} | Olares`;
      setTimeout(() => {
         randomKey.value = Math.random()
      }, 0)
   })
   

</script>
:::warning Note for Mainland China users
The steps in this guide differ for users in Mainland China due to regional differences. For a version tailored to your region, please read the Simplified Chinese documentation.
:::
# {{ title }}

<span style="display:none;opacity: 0;">{{randomKey}}</span>

<Tabs @tab-changed="tabChange" style="margin-top: 16px;" :icons="icons" :isDark="isDark" >
<template #Linux>
<installOlaresLinux/>
</template>
<template #macOS>
<installOlaresMac />
</template>
<template #Windows>
<installOlaresInstallOlaresWindows />
</template>
</Tabs>
