import type { TestPrompt, TestSuite } from '../types/test.types';


// Array of test prompts for Traditional Chinese text generation
const testPrompts: TestPrompt[] = [
  {
    name: "Traditional Chinese Summarization",
    purpose: "Test the model's ability to summarize Traditional Chinese content accurately and concisely.",
    prompt: `請將以下繁體中文文章總結為150字以內的摘要：

台灣的夜市文化是島內最具特色的文化現象之一。從北部的士林夜市到南部的六合夜市，每個地區都有其獨特的美食和文化特色。夜市不僅是當地人晚餐和宵夜的好去處，更是觀光客體驗台灣在地文化的重要窗口。在夜市中，你可以品嚐到各式各樣的小吃，從臭豆腐、珍珠奶茶到牛肉麵，應有盡有。除了美食之外，夜市還有許多遊戲攤位和商品販售，形成了一個完整的娛樂生態系統。

請用繁體中文回答。`,
    category: "Summary",
    tags: ["summarization", "Traditional Chinese", "cultural"]
  },
  {
    name: "Traditional Chinese Creative Writing",
    purpose: "Evaluate creative narrative generation in Traditional Chinese, combining different themes.",
    prompt: `請用繁體中文創作一個200字的短篇故事，主題是「科技與傳統文化的融合」。故事應該包含：
1. 現代科技元素
2. 傳統中華文化元素  
3. 具體的人物角色
4. 明確的故事情節

請確保使用正確的繁體中文字形。`,
    category: "Writing",
    tags: ["creative writing", "story generation", "Traditional Chinese"]
  },
  {
    name: "Traditional Chinese Technical Translation",
    purpose: "Test the accuracy of translating technical English content into Traditional Chinese.",
    prompt: `Please translate the following technical content into Traditional Chinese. Ensure accuracy of technical terms and proper Traditional Chinese character usage:

"Machine learning algorithms require large datasets for training. The model uses gradient descent optimization to minimize loss functions. Feature engineering and data preprocessing are crucial steps that significantly impact model performance. Cross-validation techniques help prevent overfitting and ensure model generalizability."

請使用繁體中文，並確保技術術語的準確性。`,
    category: "Translation",
    tags: ["translation", "technical", "machine learning", "Traditional Chinese"]
  },
  {
    name: "Traditional Chinese RAG Q&A",
    purpose: "Test retrieval-augmented generation (RAG) by answering questions based on a provided Traditional Chinese document.",
    prompt: `假設你有以下繁體中文文件內容作為參考：

「中華民國憲法規定，中華民國主權屬於國民全體。總統為國家元首，對外代表中華民國。行政院為國家最高行政機關，向立法院負責。司法院為國家最高司法機關。考試院為國家最高考試機關，掌理考試、任用、銓敘、考績、級俸、陞遷、保障、褒獎、撫卹、退休等事項。監察院為國家最高監察機關，行使彈劾、糾舉及審計權。」

基於以上文件內容，請用繁體中文回答：中華民國的五院制度各自負責什麼職能？`,
    category: "RAG",
    tags: ["RAG", "Q&A", "document analysis", "Traditional Chinese"]
  },
  {
    name: "Traditional Chinese Code Documentation",
    purpose: "Test the model's ability to generate detailed technical documentation for a code snippet in Traditional Chinese.",
    prompt: `請為以下Python函數編寫詳細的繁體中文文檔說明：

\`\`\`python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr
\`\`\`

文檔應包括：
1. 函數功能說明
2. 參數說明
3. 返回值說明
4. 時間複雜度分析
5. 使用範例

請使用繁體中文撰寫。`,
    category: "Code",
    tags: ["code documentation", "python", "technical writing", "Traditional Chinese"]
  },
  {
    name: "Traditional Chinese Sentiment Analysis",
    purpose: "Test sentiment classification and the ability to explain the reasoning in Traditional Chinese.",
    prompt: `請分析以下繁體中文評論的情感傾向，並用繁體中文詳細說明你的分析過程：

"這間餐廳的服務態度實在太差了，等了一個小時才上菜，而且食物還是冷的。價格昂貴但品質完全不符合期待，絕對不會再來第二次。店員的態度也很不友善，讓整個用餐體驗變得很糟糕。"

請提供：
1. 整體情感分類（正面/負面/中性）
2. 具體情感強度（1-10分）
3. 關鍵情感詞彙分析
4. 分析理由說明`,
    category: "Analysis",
    tags: ["sentiment analysis", "NLU", "text classification", "Traditional Chinese"]
  },
  {
    name: "Traditional Chinese Business Writing",
    purpose: "Test the generation of formal business communications in Traditional Chinese.",
    prompt: `請用正式的繁體中文商務用語撰寫一封電子郵件，內容如下：

收件人：張總經理
主題：第三季營運報告會議邀請

內容要點：
- 邀請參加下週三（3月15日）下午2點的會議
- 會議地點：總公司大樓12樓會議室A
- 會議將討論第三季營運成果與第四季規劃
- 請提前準備相關部門資料
- 如有時間衝突，請提前告知

請使用適當的商務禮貌用語和繁體中文格式。`,
    category: "Writing",
    tags: ["business writing", "email generation", "formal", "Traditional Chinese"]
  },
  {
    name: "Traditional Chinese Cultural Content Creation",
    purpose: "Test the generation of culturally rich and accurate content in Traditional Chinese.",
    prompt: `請用繁體中文撰寫一篇關於「中秋節」的文化介紹文章，約300字。文章應包含：

1. 中秋節的歷史由來
2. 傳統習俗和活動
3. 現代慶祝方式
4. 文化意義和象徵

請使用優美的繁體中文文字，展現中華文化的深度。`,
    category: "Writing",
    tags: ["cultural content", "creative writing", "Traditional Chinese", "festival"]
  },
  {
    name: "Traditional Chinese Academic Writing",
    purpose: "Test the generation of formal, academic-style content in Traditional Chinese.",
    prompt: `請用學術論文的格式和繁體中文撰寫一段關於「人工智慧在教育領域的應用」的摘要，約200字。

應包含：
- 研究背景
- 主要發現
- 實際應用
- 未來展望

請使用正式的學術用語和繁體中文表達。`,
    category: "Writing",
    tags: ["academic writing", "abstract generation", "AI", "Traditional Chinese"]
  },
  {
    name: "Traditional Chinese Multi-turn Dialogue",
    purpose: "Test conversational consistency and context-awareness in a multi-turn Traditional Chinese dialogue. This is the first turn.",
    prompt: `你好，我想了解台灣的高等教育制度。能否用繁體中文為我介紹一下？`,
    category: "Dialogue",
    tags: ["conversational AI", "multi-turn", "context-keeping", "Traditional Chinese"]
  }
];

const testSuite: TestSuite = {
  name: 'basic-llm-evaluation-v1',
  description: 'Basic evaluation suite',
  prompts: testPrompts,
  createdAt: new Date(),
  updatedAt: new Date()
};


export { testSuite };