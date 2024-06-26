export default [
    {
        name: 'Add Emojis to Text',
        desc: 'Add appropriate emojis to your text to make it more engaging.',
        icon: '/services/emoji.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'Create high-quality, SEO-friendly content for your blog',
        category: 'blog',
        icon: '/services/blog.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Title',
        desc: 'Generate compelling and engaging titles for your blog posts.',
        category: 'Blog',
        icon: '/services/blog_title.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'Get unique and trending topic ideas for your next blog post.',
        category: 'Blog',
        icon: '/services/blog_idea.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required: true
            },
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'Identify and fix bugs in your code.',
        icon: '/services/bug.png',
        category: 'code-bug-detector',
        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required: true
            },
        ]
    },
    {
        name: 'English Grammer Check',
        desc: 'Check and correct grammatical errors in your text.',
        icon: '/services/grammar.png',
        category: 'english',
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required: true
            },
        ]
    },
    {
        name: 'Explain Code',
        desc: 'Get clear and concise explanations for complex code.',
        icon: '/services/explain.png',
        category: 'Coding',
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required: true
            },
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'Generate effective hashtags to boost your Instagram posts.',
        icon: '/services/hashtag.png',
        category: 'blog',
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required: true
            },
        ]
    },

    {
        name: 'Instagram Post/Reel Idea',
        desc: 'Get creative and trending ideas for Instagram posts and reels.',
        icon: '/services/postidea.png',
        category: 'instagram',
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in rich text editor format',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required: true
            },
        ]
    },
    {
        name: 'Product Description',
        desc: 'Write detailed and persuasive descriptions for your products.',
        icon: '/services/product.png',
        category: 'Marketting',
        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output in rich text editor format',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required: true
            },
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Rephrase existing articles to make them unique and plagiarism-free.',
        icon: '/services/plagiarism.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Create catchy and memorable taglines for your brand.',
        icon: '/services/tagline.png',
        category: 'Marketting',
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output in rich text editor format',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required: true
            },
        ]
    },
    {
        name: 'Text Improver',
        desc: 'Enhance and refine your text for better readability and impact.',
        icon: '/services/improver.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },

    {
        name: 'Youtube Description',
        desc: 'Write detailed and attractive descriptions for your YouTube videos.',
        category: 'Youtube Tool',
        icon: '/services/youtube_description.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'Optimize your YouTube video titles for better search visibility.',
        category: 'Youtube Tools',
        icon: '/services/youtube_seo.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
        form: [
            {
                label: 'Enter your youtube video topic keyowords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter youtube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'Generate relevant tags to improve your YouTube video’s discoverability.',
        category: 'Youtube Tool',
        icon: '/services/youtube_tag.png',
        slug: 'youtube-tag',
        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',
        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
]
