/**
 * 入口函数
 * @param data json对象
 * @param parentKey 不需要
 * @returns
 */
export declare const spread: (data: string | {
    [x: string]: any;
}) => {};
/**
 * 复原函数
 * @param data json对象
 * @returns
 */
export declare const restore: (data: {
    [x: string]: any;
}) => {};
declare const _default: {
    spread: (data: string | {
        [x: string]: any;
    }) => {};
    restore: (data: {
        [x: string]: any;
    }) => {};
};
export default _default;
