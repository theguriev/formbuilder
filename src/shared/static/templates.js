export default [
  {
    description: 'The blank form allows you to create any type of form using our drag & drop builder.',
    title: 'Blank Form',
    content: []
  },
  {
    description: 'Allow your users to contact you with this simple contact form. You can add and remove fields as needed.',
    title: 'Simple Contact Form',
    content: [
      {
        parent: 0,
        id: 'k54il347.p3o',
        title: 'Columns',
        description: 'Add a block that displays content in multiple columns, then add whatever content blocks you’d like.',
        icon: {
          path: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM240 448H48c-8.837 0-16-7.163-16-16V96h208v352zm240-16c0 8.837-7.163 16-16 16H272V96h208v336z',
          viewBox: '0 0 512 512'
        },
        category: 'Layouts',
        name: 'columns',
        control: 'columns',
        settings: 'columns-settings',
        mayHaveNested: true,
        value: {
          className: ''
        },
        active: false
      },
      {
        parent: 0,
        id: 'k54imf1g.qm',
        title: 'Single line text',
        description: 'The Single Line Text field allows users to enter any characters into a standard sized input area.',
        icon: {
          path: 'M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'single-line-text',
        control: 'single-line-text',
        settings: 'single-line-text-settings',
        value: {
          label: 'Email',
          description: '',
          required: false,
          placeholder: '',
          max: 0,
          type: 'email',
          className: '',
          input: ''
        },
        active: false
      },
      {
        parent: 'k54il347.p3o',
        id: 'k54ilcuh.h3q',
        title: 'Single line text',
        description: 'The Single Line Text field allows users to enter any characters into a standard sized input area.',
        icon: {
          path: 'M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'single-line-text',
        control: 'single-line-text',
        settings: 'single-line-text-settings',
        value: {
          label: 'First name',
          description: '',
          required: true,
          placeholder: '',
          max: 0,
          type: 'text',
          className: '',
          input: ''
        },
        active: false
      },
      {
        parent: 'k54il347.p3o',
        id: 'k54ild4r.zim',
        title: 'Single line text',
        description: 'The Single Line Text field allows users to enter any characters into a standard sized input area.',
        icon: {
          path: 'M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'single-line-text',
        control: 'single-line-text',
        settings: 'single-line-text-settings',
        value: {
          label: 'Last Name',
          description: '',
          required: true,
          placeholder: '',
          max: 0,
          type: 'text',
          className: '',
          input: ''
        },
        active: false
      },
      {
        parent: 0,
        id: 'k54imtaw.aog',
        title: 'Paragprah text',
        description: 'The Paragraph Text field provides a larger box for users to enter text.',
        icon: {
          path: 'M440 32H224A160 160 0 0 0 64.35 202.65c5.5 85 79.91 149.35 165.13 149.35H256v120a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V64h64v408a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V64h56a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8zM256 320h-32a128 128 0 0 1 0-256h32z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'paragraph-text',
        control: 'paragraph-text',
        settings: 'paragraph-text-settings',
        value: {
          label: 'Comment message',
          description: '',
          required: true,
          input: '',
          className: '',
          placeholder: '',
          max: 0
        },
        active: true
      }
    ]
  },
  {
    description: 'Start collecting leads with this pre-made Request a quote form. You can add and remove fields as needed.',
    title: 'Request A Quote Form',
    content: [
      {
        parent: 0,
        id: 'k54jrljn.79d',
        title: 'Columns',
        description: 'Add a block that displays content in multiple columns, then add whatever content blocks you’d like.',
        icon: {
          path: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM240 448H48c-8.837 0-16-7.163-16-16V96h208v352zm240-16c0 8.837-7.163 16-16 16H272V96h208v336z',
          viewBox: '0 0 512 512'
        },
        category: 'Layouts',
        name: 'columns',
        control: 'columns',
        settings: 'columns-settings',
        mayHaveNested: true,
        value: {
          className: ''
        },
        active: true
      },
      {
        parent: 'k54jrljn.79d',
        id: 'k54jrnnw.wyu',
        title: 'Single line text',
        description: 'The Single Line Text field allows users to enter any characters into a standard sized input area.',
        icon: {
          path: 'M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'single-line-text',
        control: 'single-line-text',
        settings: 'single-line-text-settings',
        value: {
          label: 'First name',
          description: '',
          required: true,
          placeholder: '',
          max: 0,
          type: 'text',
          className: '',
          input: ''
        },
        active: false
      },
      {
        parent: 'k54jrljn.79d',
        id: 'k54jrnzs.ave',
        title: 'Single line text',
        description: 'The Single Line Text field allows users to enter any characters into a standard sized input area.',
        icon: {
          path: 'M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'single-line-text',
        control: 'single-line-text',
        settings: 'single-line-text-settings',
        value: {
          label: 'Last name',
          description: '',
          required: true,
          placeholder: '',
          max: 0,
          type: 'text',
          className: '',
          input: ''
        },
        active: false
      },
      {
        parent: 0,
        id: 'k54jsczh.tfc',
        title: 'Single line text',
        description: 'The Single Line Text field allows users to enter any characters into a standard sized input area.',
        icon: {
          path: 'M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'single-line-text',
        control: 'single-line-text',
        settings: 'single-line-text-settings',
        value: {
          label: 'Business / Organization',
          description: '',
          required: true,
          placeholder: '',
          max: 0,
          type: 'text',
          className: '',
          input: ''
        },
        active: false
      },
      {
        parent: 0,
        id: 'k54jsm3m.6hi',
        title: 'Single line text',
        description: 'The Single Line Text field allows users to enter any characters into a standard sized input area.',
        icon: {
          path: 'M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'single-line-text',
        control: 'single-line-text',
        settings: 'single-line-text-settings',
        value: {
          label: 'Email',
          description: '',
          required: true,
          placeholder: '',
          max: 0,
          type: 'email',
          className: '',
          input: ''
        },
        active: false
      },
      {
        parent: 0,
        id: 'k54jsugk.wvd',
        title: 'Single line text',
        description: 'The Single Line Text field allows users to enter any characters into a standard sized input area.',
        icon: {
          path: 'M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'single-line-text',
        control: 'single-line-text',
        settings: 'single-line-text-settings',
        value: {
          label: 'Phone',
          description: '',
          required: true,
          placeholder: '',
          max: 0,
          type: 'text',
          className: '',
          input: ''
        },
        active: false
      },
      {
        parent: 0,
        id: 'k54jt8xt.nhg',
        title: 'Paragprah text',
        description: 'The Paragraph Text field provides a larger box for users to enter text.',
        icon: {
          path: 'M440 32H224A160 160 0 0 0 64.35 202.65c5.5 85 79.91 149.35 165.13 149.35H256v120a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V64h64v408a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V64h56a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8zM256 320h-32a128 128 0 0 1 0-256h32z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'paragraph-text',
        control: 'paragraph-text',
        settings: 'paragraph-text-settings',
        value: {
          label: 'Request',
          description: '',
          required: true,
          input: '',
          className: '',
          placeholder: '',
          max: 0
        },
        active: false
      }
    ]
  },
  // {
  //   description: 'Start collecting donation payments on your website with this ready-made Donation form. You can add and remove fields as needed.',
  //   title: 'Donation Form',
  //   content: []
  // },
  // {
  //   description: 'Collect Payments for product and service orders with this ready-made form template. You can add and remove fields as needed.',
  //   title: 'Billing / Order Form',
  //   content: []
  // },
  // {
  //   description: 'Add subscribers and grow your email list with this newsletter signup form. You can add and remove fields as needed.',
  //   title: 'Newsletter Signup Form',
  //   content: []
  // },
  {
    description: 'Ask your users for suggestions with this simple form template. You can add and remove fields as needed.',
    title: 'Suggestion Form',
    content: [
      {
        parent: 0,
        id: 'k54k2d72.zto',
        title: 'Columns',
        description: 'Add a block that displays content in multiple columns, then add whatever content blocks you’d like.',
        icon: {
          path: 'M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM240 448H48c-8.837 0-16-7.163-16-16V96h208v352zm240-16c0 8.837-7.163 16-16 16H272V96h208v336z',
          viewBox: '0 0 512 512'
        },
        category: 'Layouts',
        name: 'columns',
        control: 'columns',
        settings: 'columns-settings',
        mayHaveNested: true,
        value: {
          className: ''
        },
        active: false
      },
      {
        parent: 0,
        id: 'k54k2y2m.cc8',
        title: 'Single line text',
        description: 'The Single Line Text field allows users to enter any characters into a standard sized input area.',
        icon: {
          path: 'M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'single-line-text',
        control: 'single-line-text',
        settings: 'single-line-text-settings',
        value: {
          label: 'Email',
          description: 'Please enter your email, so we can follow up with you.',
          required: true,
          placeholder: '',
          max: 0,
          type: 'email',
          className: '',
          input: ''
        },
        active: true
      },
      {
        parent: 0,
        id: 'k54k3500.pb9',
        title: 'Multiple choice',
        description: 'The Multiple Choice field allows users to choose only one item from a list of options.',
        icon: {
          path: 'M112 432h32c17.7 0 32-14.4 32-32v-32c0-17.6-14.3-32-32-32h-32c-17.7 0-32 14.4-32 32v32c0 17.6 14.3 32 32 32zm0-64h32v32h-32v-32zm0-192h32c17.7 0 32-14.4 32-32v-32c0-17.6-14.3-32-32-32h-32c-17.7 0-32 14.4-32 32v32c0 17.6 14.3 32 32 32zm0-64h32v32h-32v-32zM416 0H32C14.3 0 0 14.4 0 32v448c0 17.6 14.3 32 32 32h384c17.7 0 32-14.4 32-32V32c0-17.6-14.3-32-32-32zm0 480H32V32h384v448zM216 144h128c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0 128h128c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0 128h128c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-97.4-113.6c2.1 2.1 5.5 2.1 7.6 0l64.2-63.6c2.1-2.1 2.1-5.5 0-7.6l-12.6-12.7c-2.1-2.1-5.5-2.1-7.6 0l-47.6 47.2-20.6-20.9c-2.1-2.1-5.5-2.1-7.6 0l-12.7 12.6c-2.1 2.1-2.1 5.5 0 7.6l36.9 37.4z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'multiple-choice',
        control: 'multiple-choice',
        settings: 'multiple-choice-settings',
        value: {
          label: 'Which department do you have a suggestion for?',
          description: '',
          required: false,
          options: [
            {
              label: 'Sales',
              value: 'Sales'
            },
            {
              label: 'Customer support',
              value: 'Customer support'
            },
            {
              label: 'Product development',
              value: 'Product development'
            },
            {
              label: 'Other',
              value: 'Other'
            }
          ],
          input: '',
          inputMultiple: [],
          className: '',
          multiple: false,
          choices: 'Sales\nCustomer support\nProduct development\nOther'
        },
        active: false
      },
      {
        parent: 0,
        id: 'k54k35n6.uw',
        title: 'Single line text',
        description: 'The Single Line Text field allows users to enter any characters into a standard sized input area.',
        icon: {
          path: 'M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'single-line-text',
        control: 'single-line-text',
        settings: 'single-line-text-settings',
        value: {
          label: 'Subject',
          description: '',
          required: true,
          placeholder: '',
          max: 0,
          type: 'text',
          className: '',
          input: ''
        },
        active: false
      },
      {
        parent: 0,
        id: 'k54k36c5.028',
        title: 'Paragprah text',
        description: 'The Paragraph Text field provides a larger box for users to enter text.',
        icon: {
          path: 'M440 32H224A160 160 0 0 0 64.35 202.65c5.5 85 79.91 149.35 165.13 149.35H256v120a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V64h64v408a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V64h56a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8zM256 320h-32a128 128 0 0 1 0-256h32z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'paragraph-text',
        control: 'paragraph-text',
        settings: 'paragraph-text-settings',
        value: {
          label: 'Message',
          description: '',
          required: true,
          input: '',
          className: '',
          placeholder: '',
          max: 0
        },
        active: false
      },
      {
        parent: 'k54k2d72.zto',
        id: 'k54k2fcv.gs',
        title: 'Single line text',
        description: 'The Single Line Text field allows users to enter any characters into a standard sized input area.',
        icon: {
          path: 'M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'single-line-text',
        control: 'single-line-text',
        settings: 'single-line-text-settings',
        value: {
          label: 'First name',
          description: '',
          required: true,
          placeholder: '',
          max: 0,
          type: 'text',
          className: '',
          input: ''
        },
        active: false
      },
      {
        parent: 'k54k2d72.zto',
        id: 'k54k2g3g.2o',
        title: 'Single line text',
        description: 'The Single Line Text field allows users to enter any characters into a standard sized input area.',
        icon: {
          path: 'M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z',
          viewBox: '0 0 448 512'
        },
        category: 'Standard fields',
        name: 'single-line-text',
        control: 'single-line-text',
        settings: 'single-line-text-settings',
        value: {
          label: 'Last name',
          description: '',
          required: true,
          placeholder: '',
          max: 0,
          type: 'text',
          className: '',
          input: ''
        },
        active: false
      }
    ]
  }
]
