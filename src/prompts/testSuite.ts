import type { TestPrompt, TestSuite } from '../types/test.types';

const article = `

申訴專員陳積志今日（八月七日）宣布公署完成房屋署處理公共屋邨冷氣機滴水的主動調查行動，並向房屋署提出共15項主要改善建議。

超過78萬住戶、約200萬居民居住於香港房屋委員會（房委會）轄下的195條公共屋邨。屋邨的日常管理由房屋署或其聘任的外判服務承辦商負責，管理範疇眾多，公屋管理是否妥善，屬重要民生事宜。繼公署今年三月完成有關公共屋邨違例泊車的主動調查行動後，是項主動調查行動處理的是冷氣機滴水。

陳積志表示：「房屋署多年來做了大量相關工作，透過推行冷氣機去水管安裝計劃以及將冷氣機滴水不當行為納入屋邨管理扣分制，成功將冷氣機滴水的問題大幅改善。房屋署收到的投訴，由二○○五年的約18 900宗下降至近三年（即二○二二至二○二四年）每年平均約1 300宗，下降幅度高達93%，工作成果值得肯定和讚賞。」

然而，冷氣機滴水滋擾始終是每年夏天的常見問題，房屋署有責任更妥善處理，為居民締造衞生和優質的居住環境。現時房委會轄下的公共屋邨之中，約三分之二的物業管理工作由房屋署聘任的外判服務承辦商承辦（外判邨），其餘三分之一則由房屋署直接管理（直管邨）。

外判邨與直管邨於二○二二至二○二四年期間，分別接獲2 826宗和1 049宗冷氣機滴水投訴。外判邨的冷氣機滴水投訴個案數字從二○二二年至二○二四年上升45.5%，而直管邨的冷氣機滴水投訴個案數字則上升20.1%。於二○二四年，外判邨的重複投訴佔10.6%，而直管邨則為6.3%。這些數字均顯示直管邨情況較佳，而外判邨的投訴升幅或重複投訴百分比，均表現稍遜。若以投訴所佔戶數計算，外判邨的冷氣機滴水投訴個案數字，於二○二二年、二○二三年及二○二四年0.17%、0.20%和0.24%﹔而直管邨於該三年接獲投訴的宗數則佔0.12%、0.12%和0.14%。

扣分制下的不當行為可分為先警告後扣分及即時扣分兩類，冷氣機滴水屬先警告後扣分的違規事項。公署發現，就冷氣機滴水個案，房屋署的外判服務承辦商在執行扣分制之前，不時會向違規租戶發出僅屬勸諭性質的提示信，而公署查訊及調查初期，房屋署沒有為發出提示信制訂指引。在二○二二至二○二四年期間，外判邨的外判服務承辦商就每宗投訴平均發出兩封提示信，數目超過直管邨的十倍。有個案顯示，外判服務承辦商多次發出提示信，未能有效令違規租戶糾正冷氣機滴水的問題。而由於由房屋署聘任的外判服務承辦商未必須向房屋署呈報提示信數目，該署無法確定外判服務承辦商有否濫發提示信或對冷氣機滴水個案處理不當。

公署調查亦發現，房屋署有關處理冷氣機滴水個案的工作指引比較簡略，只列明執行扣分制的程序，但未有詳述前線人員應如何調查投訴、確定滴水源頭、測試冷氣機及所需時間、處理租戶不合作的情況、安排覆查等。公署認為，正如部分個案顯示，在欠缺適切指引下，前線職員或會處理不一。

公署欣悉，在公署查訊及調查期間，房屋署於二○二四年十二月實施扣分制加強措施，例如統一勸諭信、給予一律五天的寬限期，以及就發出勸諭信及跟進行動訂立指引等。

陳積志表示：「民生無小事，冷氣機滴水可能造成環境衞生滋擾，亦有可能產生噪音滋擾。從屋邨管理角度而言，房屋署有責任貫徹執行扣分制，遏止冷氣機滴水問題及如有相關投訴應盡快解決。公署認為，房屋署無法確定其外判服務承辦商有否濫發提示信及處理不一的情況並不理想。公署建議，房屋署應研究制訂有關發出勸諭信和報告個案的監管措施，加強對其外判服務承辦商的監管，以及研究如何更有系統記錄冷氣機滴水投訴個案的詳情及跟進行動。房屋署亦應加強工作指引，並加快引入創新科技，強化查找冷氣機滴水源頭的能力。此外，公署亦建議房屋署考慮與其他政府部門（例如食物環境衞生署（食環署））協作，就不同範疇互相交流經驗。」

整體而言，公署提出共15項主要改善建議。公署欣悉，房屋署同意公署提出的所有改善建議。

公署向房屋署提出的主要改善建議包括：

• 研究制訂有關發出勸諭信和報告個案的監管措施，加強對由房屋署聘任的外判服務承辦商的監管；

• 研究如何更有系統記錄冷氣機滴水投訴個案的詳情及跟進行動，以便利監管；

• 考慮優化處理冷氣機滴水個案的工作指引，讓屋邨管理人員可更清晰及有效工作﹔

• 於工作指引明確訂明前線人員應如何調查滴水源頭，包括在沒有其他方式核實的情況下，例如當無法從外觀察確定滴水源頭，盡可能進入懷疑滴水的單位測試冷氣機，並訂定冷氣機測試的時間標準，以及找不到滴水源頭的話，其後續跟進的程序；

• 就處理未能鎖定滴水源頭的情況，訂立工作指引和制訂指定格式的通告文件﹔

• 考慮要求由房屋署聘任的外判服務承辦商在每月報告標示發出勸諭信的數目，以及有否重複個案，以便較易察覺問題及跟進﹔

• 加快及繼續引入創新科技，強化查找冷氣機滴水源頭的能力；及

• 考慮與其他政府部門協作（例如食環署）探討可否配合進行大規模的巡查行動及宣傳教育活動，藉以增加迴響，提升市民妥善維修保養冷氣機的意識。

主動調查行動報告已上載至申訴專員公署網頁www.ombudsman.hk供公眾參閱。

`

const article_eng = `

  The Ombudsman, Mr Jack Chan, today (August 7) announced the completion of a direct investigation operation into the Housing Department (HD)'s handling of air-conditioner dripping in public housing estates, with 15 major recommendations for improvement made to the HD.

     Over 780 000 households, comprising about 2 million residents, live in 195 public housing estates under the Hong Kong Housing Authority (HKHA). The HD and its property services agents (PSAs) are responsible for the daily management of these estates, which encompasses a wide array of duties. Proper management of public housing is a crucial livelihood issue. Following the Office of The Ombudsman's direct investigation operation into illegal parking in public housing estates completed in March this year, this direct investigation operation deals with air-conditioner dripping.

     Mr Chan said, "Over the years, the HD has made extensive efforts to successfully alleviate the problem of air-conditioner dripping through the implementation of the air-conditioner drain-pipe installation programme, and inclusion of such misdeeds under the Marking Scheme for Estate Management Enforcement. The number of complaints received by the HD dropped by 93 per cent from around 18 900 in 2005 to an average of around 1 300 from 2022 to 2024. This remarkable accomplishment merits recognition and appreciation."

     However, air-conditioner dripping remains a typical problem every summer. The HD must step up its efforts to ensure a hygienic and quality living environment for residents. Among the public housing estates under HKHA, the property management of around two-thirds are outsourced to the HD's PSAs (known as outsourced estates), and the remaining one-third are directly managed by the HD (known as directly managed estates).

     Between 2022 and 2024, outsourced and directly managed estates received 2 826 and 1 049 complaints respectively about air-conditioner dripping. During those years, related complaints rose by 45.5 per cent in outsourced estates and 20.1 per cent in directly managed estates. In 2024, 10.6 per cent of the complaints in outsourced estates were repeated complaints, compared to 6.3 per cent in directly managed estates.  These figures reflect that directly managed estates outperformed outsourced estates, where outsourced estates had a higher increase in the number of complaints and a higher percentage of repeated complaints. In terms of the proportion of complaints over the number of households, outsourced estates recorded percentages of 0.17 per cent, 0.20 per cent and 0.24 per cent in 2022, 2023 and 2024 respectively while directly managed estates recorded percentages of 0.12 per cent, 0.12 per cent and 0.14 per cent during the same period.
     There are two categories of misdeeds under the Marking Scheme: those incurring a warning prior to the allotment of penalty points, and those resulting in an immediate point allotment. Air-conditioner dripping falls into the former category.  The Office's investigation revealed that in air-conditioner dripping cases, the HD's PSAs often issued reminder letters to non-compliant tenants before enforcing the Marketing Scheme. These letters were merely advisory in nature. During the Office's inquiry and investigation, initially the HD had not yet formulated guidelines on issuing reminder letters. Between 2022 and 2024, the HD's PSAs issued an average of two reminder letters per complaint, which was more than tenfold of those issued in directly managed estates. There were cases which revealed that despite the repeated issuance of reminder letters, the dripping problem still occurred. As the HD's PSAs might not be required to report the number of reminder letters issued to the HD, the HD can hardly verify whether its PSAs are issuing too many reminder letters or mishandling air-conditioner dripping complaints.

     The Office's investigation also found that the HD's operational guidelines for handling air-conditioner dripping cases are too brief, focusing only on the procedures for enforcing the Marking Scheme without clear instructions for frontline staff on such aspects as complaint investigations, source detections, air-conditioner testing and its duration, dealing with unco-operative tenants and arranging follow-up inspections. The Office considers the absence of proper guidelines might have resulted in inconsistent handling by frontline staff, as evidenced in some cases.

     The Office is pleased to note that during its inquiry and investigation, the HD has, since December 2024, implemented enhanced measures under the Marking Scheme, such as launching standardised "advisory letters", granting a uniform grace period of five days and formulating guidelines for issuing advisory letters and follow-up actions etc. 

     Mr Chan said, "Nothing about people's livelihoods is trivial. Air-conditioner dripping probably causes not only hygiene-related nuisances but also noise disturbances. From an estate management perspective, it is incumbent on the HD to thoroughly enforce the Marking Scheme in order to address the dripping problems and resolve such complaints promptly. The Office considers it undesirable for the HD to be unable to ascertain in the past whether its PSAs were issuing too many reminder letters and handling cases inconsistently. The Office recommends that the HD explore ways to formulate measures for monitoring the issuance of advisory letters and case reporting to strengthen its supervision of its PSAs, as well as to record the details and follow-up actions in relation to air-conditioner dripping complaints more systematically. The HD should also beef up its operational guidelines and expedite the adoption of innovative technologies to improve its ability to trace the sources of dripping. Furthermore, the Office recommends that the HD consider collaboration with other government departments (such as the Food and Environmental Hygiene Department (FEHD)) to foster exchanges of experiences across their respective areas of responsibility."

     Overall, the Office has made 15 major recommendations for improvements. It is pleased to note that all the recommendations have been agreed by the HD.
     The Office's major recommendations for improvement to the HD include: 

• explore the formulation of measures for monitoring the issuance of advisory letters and case reporting to strengthen its supervision of its PSAs;

• explore how to record the details and follow-up of dripping complaints more systematically to facilitate monitoring;

• consider enhancing its operational guidelines for handling air-conditioner dripping cases, enabling estate management staff to work in clarity and effectively;

• beef up the operational guidelines with clear procedures for frontline staff to investigate the source of dripping, including making every effort to enter suspected flats for air-conditioner testing where there is no other way to verify the source of dripping, for example, when the source cannot be determined through external observation, standardising the durations for testing, and specifying follow-up actions when the source remains unidentified;

• draw up operational guidelines and notices in designated format for cases where the source of dripping has not been determined;

• consider requiring its PSAs to include in their monthly reports the number of advisory letters issued and any repeated cases to facilitate problem detection and follow-up;

• expedite and broaden the adoption of innovative technologies to strengthen its ability to detect dripping air-conditioners; and

• consider collaborating with other government departments (such as the FEHD) to explore opportunities of conducting large-scale inspections as well as publicity and education campaigns, with a view to increasing public engagement and boosting awareness of proper air-conditioner maintenance.

     The full investigation report has been uploaded to the website of the Office of The Ombudsman at www.ombudsman.hk for public information.

`


// Array of test prompts for Traditional Chinese text generation
const testPrompts: TestPrompt[] = [
  {
    name: "繁體中文摘要能力",
    purpose: "測試模型準確且簡潔地總結繁體中文內容的能力。",
    prompt: `請將以下繁體中文文章總結為150字以內的摘要：

${article}

請用繁體中文回答。`,
    category: "Summary",
    tags: ["summarization", "Traditional Chinese", "news", "government"]
  },
  {
    name: "繁體中文創意寫作",
    purpose: "評估模型在繁體中文下，融合不同主題進行創意敘事生成的能力。",
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
    name: "繁體中文翻譯",
    purpose: "測試模型將英文內容翻譯成繁體中文的準確性。",
    prompt: `
    
Please translate the following government press release article into Traditional Chinese, ensuring all terms, names, figures, and policy details remain accurate and in official Hong Kong usage. Retain the format and structure as much as possible.

${article_eng}
`,
    category: "Translation",
    tags: ["translation", "Traditional Chinese"]
  },
  {
    name: "繁體中文檢索增強生成問答 (RAG)",
    purpose: "測試檢索增強生成（RAG）能力，根據提供的繁體中文文件內容回答問題。",
    prompt: `假設你有以下繁體中文文件內容作為參考：

${article}

基於以上文件內容，請用繁體中文回答：

申訴專員公署就房屋署處理公共屋邨冷氣機滴水問題，向房屋署提出了多少項主要改善建議？請列舉當中的兩項建議。

請說明外判邨與直管邨在2022至2024年間冷氣機滴水投訴數字和處理方法有何分別？哪一種管理模式表現較佳？

根據新聞稿，冷氣機滴水屬於哪一類屋邨管理違規事項？房屋署在處理這種違規行為時，過往存在哪些問題，被申訴專員提出哪些改進建議？

`,
    category: "RAG",
    tags: ["RAG", "Q&A", "document analysis", "Traditional Chinese"]
  },
 
  {
    name: "繁體中文情感分析",
    purpose: "測試模型的情感分類能力，以及用繁體中文解釋其分析過程的能力。",
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
    name: "繁體中文商務寫作",
    purpose: "測試模型生成正式繁體中文商務書信的能力。",
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
    name: "繁體中文文化內容創作",
    purpose: "測試模型生成文化底蘊豐富且內容準確的繁體中文文章的能力。",
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
    name: "繁體中文學術寫作",
    purpose: "測試模型生成正式、學術風格的繁體中文內容的能力。",
    prompt: `請用學術論文的格式和繁體中文撰寫一段關於「人工智慧在教育領域的應用」的摘要，約200字。

應包含：
- 研究背景
- 主要發現
- 實際應用
- 未來展望

請使用正式的學術用語和繁體中文表達。`,
    category: "Writing",
    tags: ["academic writing", "abstract generation", "AI", "Traditional Chinese"]
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