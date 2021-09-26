export const links: {
  chapterTitle: string;
  items: {
    title: string;
    links: { adress: string; description: string }[];
  }[];
}[] = [
  {
    chapterTitle: 'CSS',
    items: [
      {
        title: 'fontFace',
        links: [
          { adress: 'local-reference/viewchild', description: '@ViewChild' },
          { adress: 'test', description: 'code sample' },
        ],
      },
    ],
  },
  {
    chapterTitle: 'Decorators',
    items: [
      {
        title: '@ViewChild',
        links: [
          {
            adress: 'local-reference/viewchild',
            description: '@ViewChild',
          },
        ],
      },
      {
        title: '@ViewChildren',
        links: [
          {
            adress: 'local-reference/viewchildren',
            description: '@ViewChildren',
          },
        ],
      },
    ],
  },
  {
    chapterTitle: 'Reactive forms',
    items: [
      { title: 'title 1', links: [{ adress: 'test', description: 'test' }] },
    ],
  },
  {
    chapterTitle: 'Content projection',
    items: [
      {
        title: 'Single slot',
        links: [
          {
            adress: 'content-projection/single',
            description: 'single-slot',
          },
        ],
      },
      {
        title: 'Multi slot',
        links: [
          {
            adress: 'content-projection/multi',
            description: 'multi-slot',
          },
        ],
      },
      {
        title: 'Conditional content projection',
        links: [
          {
            adress: 'content-projection/conditional',
            description: 'conditional content projection',
          },
        ],
      },
    ],
  },
];
