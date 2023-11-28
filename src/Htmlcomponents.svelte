<script>
  export let jp_props;
  export let props = {};
  props['jp_props'] = jp_props;
  
  import Dummy from "./Dummy.svelte";
  import Switch from './Switch.svelte';
  import Collapsible from './Collapsible.svelte';
  const selfClosingTags = ['hr', 'input', 'area', 'base', 'br', 'col', 'embed', 'img', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

  const components = {
    'Dummy': Dummy,
    'Switch': Switch,
    'Dummy': Dummy,
    'Collapsible': Collapsible
  };

  function eventHandlerWrapper(eventType) {
    return function (event) {
      if (jp_props.events.includes(eventType)) {
        eventHandler_CSR(props, event, false);
      }
    };
  }

  const eventHandlers = {
    click: eventHandlerWrapper('click'),
    change: eventHandlerWrapper('change'),
    submit: eventHandlerWrapper('submit'),
    mouseover: eventHandlerWrapper('mouseover'),
    mouseenter: eventHandlerWrapper('mouseenter'),
    mouseleave: eventHandlerWrapper('mouseleave'),
    mouseout: eventHandlerWrapper('mouseout'),
  };

  $: descriptionObject = {
    ...jp_props.attrs,
    style: jp_props.style,
    class: jp_props.classes, 
  };
</script>{#if jp_props.vue_type === "html_component"}<svelte:element
    this={jp_props.html_tag}
    {...descriptionObject}
    on:click={eventHandlers.click}
    on:change={eventHandlers.change}
    on:submit|preventDefault={eventHandlers.submit}
    on:mouseover={eventHandlers.mouseover}
    on:mouseenter={eventHandlers.mouseenter}
    on:mouseleave={eventHandlers.mouseleave}
    on:mouseout={eventHandlers.mouseout}
>{#if jp_props.text}{jp_props.text}{/if}{#each jp_props.object_props as cobj_props}{#if cobj_props.show}<svelte:self jp_props={cobj_props}/>{/if}{/each}{#if jp_props.inner_html}{@html jp_props.inner_html}{/if}</svelte:element>{:else}<svelte:component this={components[jp_props.vue_type]} {...descriptionObject} jp_props={jp_props}/>{/if}