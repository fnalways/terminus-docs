<script setup>
   import { ref, computed, onMounted } from 'vue'
   import installOlaresGeneralLinux from './install-olares-general-linux.md'
   import installOlaresRaspberryPi from './install-olares-raspberry-pi.md'
   import installOlaresPVE from './install-olares-pve.md'
   import installOlaresLXC from './install-olares-lxc.md'
   import { useData } from 'vitepress'

</script>
# Install Olares on Linux-based systems

Olares is designed to run on Linux-based systems and has been verified on the following platforms:
- Linux distributions: Debian, Ubuntu, Raspbian (a Debian-based system for Raspberry Pi)
- Virtualization platforms: Proxmox VE (PVE, Debian-based), LXC on PVE.

<tabs>
<template #General-Linux>
<installOlaresGeneralLinux/>
</template>
<template #PVE>
<installOlaresPVE/>
</template>
<template #LXC-on-PVE>
<installOlaresLXC/>
</template>
<template #Raspberry-Pi>
<installOlaresRaspberryPi/>
</template>
</tabs>