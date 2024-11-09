/**
 * Only copies fields from the source object that already exist on the target object, skipping everything else
 * @param target
 * @param source
 */
export declare function copyExistingKeys(target: {
    [key: string]: any;
}, source: {
    [key: string]: any;
}): void;
