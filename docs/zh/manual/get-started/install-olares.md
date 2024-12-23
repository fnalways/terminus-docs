<script setup>
   import { ref, computed, onMounted } from 'vue'
   import installOlaresRaspberryPi from './install-olares-raspberry-pi.md'
   import installOlaresMac from './install-olares-mac.md'
   import installOlaresInstallOlaresWindows from './install-olares-windows.md'

   import installOlaresLinux from './install-olares-linux.md'
   import installOlaresGeneralLinux from './install-olares-general-linux.md'
   import installOlaresPVE from './install-olares-pve.md'
   import installOlaresLXC from './install-olares-lxc.md'

   import { useData } from 'vitepress'

   const { isDark } = useData()
   const tabActiveIndex = ref(0)
   const randomKey = ref('RandomKey')
   const title = computed(()=> titles[tabActiveIndex.value])
   const titles = ['在 Linux 系统上安装', '在 Mac 上安装', '在 Windows 上安装']

   const icons = ['linux-brands-solid', 'apple-brands-solid', 'windows-brands-solid']
   const icons_light = computed(() => icons.map(item => `/images/manual/icons/${item}.svg`))
   const icons_dark = computed(() => icons.map(item => `/images/manual/icons/${item}-dark.svg`))

   function tabChange(tab, index) {
      tabActiveIndex.value = index
      document.title = `${title.value} | Olares`;
   }

   function tabChange2(tab, index) {
      randomKey.value = Math.random()
   }

   onMounted(() => {
      document.title = `${title.value} | Olares`;
      setTimeout(() => {
         randomKey.value = Math.random()
      }, 0)
   })
   

</script>

<span style="display:none;opacity: 0;">{{randomKey}}</span>

<Tabs @tab-changed="tabChange" style="margin-top: 16px;" :icons="icons" :isDark="isDark" >
<template #Linux>

<Tabs @tab-changed="tabChange2" >

# 在 Linux 系统上安装 Olares

<installOlaresLinux />
<template #通用-Linux>
<installOlaresGeneralLinux/>
</template>
<template #PVE>
<installOlaresPVE />
</template>
<template #LXC-on-PVE>
<installOlaresLXC />
</template>
<template #Raspberry-Pi>
<installOlaresRaspberryPi/>
</template>
</Tabs>

</template>
<template #macOS>
<installOlaresMac />
</template>
<template #Windows>
<installOlaresInstallOlaresWindows />
</template>
</Tabs>

<style>
   h2:has(.h2-border-none) {
    border: none !important;
    margin-top: 0px !important;
    padding-top: 0px !important;
}
</style>

