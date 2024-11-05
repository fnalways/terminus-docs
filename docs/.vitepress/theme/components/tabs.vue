<template>
  <div>
    <div class="tabs">
      <button
        v-for="tab in tabLabels"
        :key="tab"
        @click="activeTab = tab"
        :class="{ active: activeTab === tab }"
      >
        {{ tab }}
      </button>
    </div>
    <div v-for="tab in tabLabels" :key="tab" v-show="activeTab === tab">
      <slot :name="tabSlots[tab]"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: null,
      tabLabels: [],
      tabSlots: {},
    };
  },
  mounted() {
    // Map slot names to display labels
    const slots = Object.keys(this.$slots).filter((slot) => slot !== "default");
    this.tabSlots = slots.reduce((map, slot) => {
      const label = slot.replace(/-/g, " "); // Replace hyphens with spaces
      map[label] = slot;
      return map;
    }, {});

    this.tabLabels = Object.keys(this.tabSlots);
    this.activeTab = this.tabLabels[0];
  },
};
</script>

<style>
.tabs {
  display: flex;
  background-color: var(--vp-c-bg);
}

.tabs button {
  flex: 1;
  padding: 0.5rem 1rem;
  border: none;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-primary);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-bottom: 2px solid transparent;
}

.tabs button.active {
  background-color: var(--vp-c-surface);
  color: var(--vp-c-brand);
  border-bottom-color: var(--vp-c-brand);
}

.tabs button:hover {
  background-color: var(--vp-c-surface);
  color: var(--vp-c-brand);
}

div[style] {
  color: var(--vp-c-text-primary);
}
</style>
