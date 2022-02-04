export const initialData = {
    items: {
        'item-1': { id: 1, name: 'item-1', content: 'NewsItem 1'},
        'item-2': { id: 2, name: 'item-2', content: 'NewsItem 2'},
        'item-3': { id: 3, name: 'item-3', content: 'NewsItem 3'},
        'item-4': { id: 4, name: 'item-4', content: 'NewsItem 4'},
        'item-5': { id: 5, name: 'item-5', content: 'NewsItem 5'},
        'item-6': { id: 6, name: 'item-6', content: 'NewsItem 6'},
        'item-7': { id: 7, name: 'item-7', content: 'NewsItem 7'},
        'item-8': { id: 8, name: 'item-8', content: 'NewsItem 8'},
        'item-9': { id: 9, name: 'item-9', content: 'NewsItem 9'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Drafts',
            itemIds: ['item-1', 'item-2', 'item-3']
        },
        'column-2': {
            id: 'column-2',
            title: 'Published',
            itemIds: ['item-4', 'item-5', 'item-6']
        },
        'column-3': {
            id: 'column-3',
            title: 'Archive',
            itemIds: ['item-7', 'item-8', 'item-9']
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
}