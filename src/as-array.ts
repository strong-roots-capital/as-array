/**
 * as-array
 * Promote non-array values to an array
 */


/**
 * Promote `value` to an array, if not already.
 *
 * @remarks
 *
 * - will not modify arrays
 * - promotes `null` to []
 * - promotes `undefined` to []
 *
 * @param value - Value to wrap in an array if necessary
 * @returns Value wrapped in an array
 */
export default function asArray<T = any>(value: T | T[]): T[] {
    if (Array.isArray(value)) {
        return value
    }

    if (value === null || value === undefined) {
        return []
    }

    return [value]
}
