import type { AnyFn } from '../utils/types';
/**
 * @deprecated since ember 3.25 (with polyfill) and ember 4.5, this utility is not needed as functions can be directly invoked
 *
 * Calls a function
 */
export declare function compute<Action extends AnyFn>([action, ...params]: [
    action: Action,
    ...params: Parameters<Action>
]): ReturnType<Action>;
declare const _default: abstract new <Action extends AnyFn>() => import("@ember/component/helper").FunctionBasedHelperInstance<{
    Args: {
        Positional: [action: Action, ...params: Parameters<Action>];
        Named: object;
    };
    Return: ReturnType<Action>;
}>;
export default _default;
//# sourceMappingURL=compute.d.ts.map