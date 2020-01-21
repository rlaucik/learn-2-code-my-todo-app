import { editItemText } from "../TodoAppService";

const testItems = [
    { text: 'foo' },
    { text: 'bar' },
    { text: 'test'},
]

describe('TodoAppService', () => {
    it('edits items\'s text when provided new text and index', () => {
        const itemTextToUpdate = 'hello';
        const itemIndex = 1;

        const updatedItems = editItemText(testItems, itemIndex, itemTextToUpdate);

        expect(updatedItems).toEqual([
            { text: 'foo' },
            { text: 'hello' },
            { text: 'test' },
        ]);
    });
});