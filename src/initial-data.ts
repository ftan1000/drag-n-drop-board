export const initialData = {
    items: {
        'item-1': { id: 1, name: 'news-1', content: 'NewsItem 1'},
        'item-2': { id: 2, name: 'news-2', content: 'NewsItem 2'},
        'item-3': { id: 3, name: 'news-3', content: 'NewsItem 3'},
        'item-4': { id: 4, name: 'news-4', content: 'NewsItem 4'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Drafts',
            itemIds: ['item-1', 'item-2']
        },
        'column-2': {
            id: 'column-2',
            title: 'Published',
            itemIds: ['item-3', 'item-4']
        }
    },
    columnOrder: ['column-1', 'column-2']
}