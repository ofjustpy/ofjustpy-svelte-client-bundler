<script>
  export let jp_props;
  import Htmlcomponent from './Htmlcomponents.svelte';
  import { crossfade } from 'svelte/transition';
   import { fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  let isExpanded = false;

const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;
      return {
        duration: 600,
        easing: quintOut,
        css: t => `
          transform: ${transform} scale(${t});
          opacity: ${t}
        `
      };
    }
  });
  
  const toggleExpand = () => {
    isExpanded = !isExpanded;
  };
</script>

<div class="relative border p-4 {jp_props.classes}">
  <div class="flex justify-between items-center">
      {#if isExpanded}
        <div out:send="{{ key: isExpanded }}" in:receive="{{ key: isExpanded }}"> 
      {#each jp_props.object_props as cobj_props}
      {#if cobj_props.show}
	    <svelte:component this={Htmlcomponent} jp_props={cobj_props}/>
      {/if}
      {/each}
      </div>
      {:else}
      <div class={jp_props.hide_banner_classes}>
             {jp_props.hide_banner_text}
      </div>
    {/if}
    <button 
      class={jp_props.toggler_classes} 
      on:click={toggleExpand}
    >
      {isExpanded ? '-' : '+'}
    </button>
  </div>
</div>
