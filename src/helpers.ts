import { CombinedIDs } from "./ids";

function getIDs(ids: CombinedIDs, key: 'block' | 'item') {
    const itemIds: string[] = [];
    
    for (const [k, v] of Object.entries(ids)) {
        if (v[key]) {
            itemIds.push(k);
        }
    }

    return itemIds;
}

/**
 * Gets the IDs of items as a string array. Namespace not included.
 * @param ids The IDs object that contains both block and item IDs.
 */
export function getItemIDs(ids: CombinedIDs) {
    return getIDs(ids, 'item');
}

/**
 * Gets the IDs of blocks as a string array. Namespace not included.
 * @param ids The IDs object that contains both block and item IDs.
 */
export function getBlockIDs(ids: CombinedIDs) {
    return getIDs(ids, 'block');
}

/**
 * Gets all of the IDs. Does not include namespace.
 * @param ids The IDs object.
 */
export function getAll(ids: CombinedIDs) {
    return Object.keys(ids);
}