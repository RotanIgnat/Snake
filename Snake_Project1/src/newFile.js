import GameBoard from './components/GameBoard.vue';

/*<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Broken+Fax&display=swap');
</style>*/
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik+Broken+Fax&display=swap" rel="stylesheet">

const score = ref(0)

function onScore()
{score.value++}

const __VLS_componentsOption = ;

let __VLS_name!: 'App';
function __VLS_template() {let} __VLS_ctx!: InstanceType<__VLS_PickNotAny /><typeof __VLS_internalComponent />, new () => >> & ;
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends {...components} />: infer C } ? C : > & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name />, typeof __VLS_internalComponent & (new () => {$slots}: typeof __VLS_slots })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own />, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = ;
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!:
& __VLS_WithComponent< />'GameBoard', typeof __VLS_localComponents, "GameBoard", "GameBoard", "GameBoard">
;
__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;
__VLS_intrinsicElements.header;__VLS_intrinsicElements.header;
__VLS_intrinsicElements.h2;__VLS_intrinsicElements.h2;__VLS_intrinsicElements.h2;__VLS_intrinsicElements.h2;
__VLS_components.GameBoard;
// @ts-ignore
[GameBoard,];
{ }
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({...{}, class { }}: ("game"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_0 />, typeof __VLS_2> & Record<string />, unknown>) => void)({...{}, class { }}: ("game"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3 />.emit>;
{ }
const __VLS_5 = __VLS_intrinsicElements["header"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_5 />, typeof __VLS_7> & Record<string />, unknown>) => void)({...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8 />.emit>;
{ }
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_10 />, typeof __VLS_12> & Record<string />, unknown>) => void)({...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13 />.emit>;
{ }
const __VLS_15 = __VLS_intrinsicElements["h2"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({...{}, class { }}: ("Name"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_15 />, typeof __VLS_17> & Record<string />, unknown>) => void)({...{}, class { }}: ("Name"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18 />.emit>;
(__VLS_18.slots!).default;
}
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
{ }
const __VLS_20 = ( as 'GameBoard' extends keyof typeof __VLS_ctx ? {'GameBoard'}: typeof __VLS_ctx.GameBoard }: typeof __VLS_resolvedLocalAndGlobalComponents).GameBoard;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({...{ onScore: {} as any, }, }));
( as {GameBoard}: typeof __VLS_20 }).GameBoard;
const __VLS_22 = __VLS_21({...{ onScore: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_20 />, typeof __VLS_22> & Record<string />, unknown>) => void)({...{ onScore: {} as any, }, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23 />.emit>;
let __VLS_25 = {'score'}: __VLS_pickEvent(__VLS_24['score'], ( as __VLS_FunctionalComponentProps<typeof __VLS_21 />, typeof __VLS_22>).onScore) };
__VLS_25 = {score}: (__VLS_ctx.onScore) };
}
{ }
const __VLS_26 = __VLS_intrinsicElements["h2"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
const __VLS_28 = __VLS_27({...{}, class { }}: ("Scoretext"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
( as (props: __VLS_FunctionalComponentProps<typeof __VLS_26 />, typeof __VLS_28> & Record<string />, unknown>) => void)({...{}, class { }}: ("Scoretext"), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29 />.emit>;
( __VLS_ctx.score );
(__VLS_29.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses))
var __VLS_slots!:;
// @ts-ignore
[onScore,score,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({setup()} { }
return {GameBoard}: GameBoard as typeof GameBoard,
};
},
});
export default (await import('vue')).defineComponent({setup()} { }
return ;
},
});
</></></>;
