import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('ba3abb5a-feab-4e60-b100-c9daf196ae84', '1Judd.Kessler@gmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv789012', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('454e99a0-b0ec-4121-8945-8f2a44b680ef', '10Gerda74@hotmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=12', 'inv901234', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('a8765620-9237-4cbf-bcec-e1c25684815e', '19Bianka_Auer@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inv345678', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('1e58adcc-03b3-41ca-82b9-6c2a63f99cc3', '37Ronny.Waters@hotmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=39', 'inv123456', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('f2159221-581e-4d45-860b-8bc66c461a46', '46Elna.OConnell61@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=48', 'inv123456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('1d2d8aba-7f08-48cb-95f4-a8cce8f8f29e', '55Maida_Schroeder19@yahoo.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=57', 'inv567890', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('e2d1c7b8-0991-4818-9153-c2f477c64104', '64Mariane.Kozey@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv345678', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('037b574a-583b-4135-b42f-89512e215b85', '73Kaylah.Glover@gmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv901234', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('2757554f-13a8-4fab-8569-cf50e7444da0', '82Lois4@hotmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=84', 'inv789012', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('bf2f0bd7-7a0c-4bc5-b952-53161e032d20', 'httpsexample.comendpoint1', 'subscription_data_4', '037b574a-583b-4135-b42f-89512e215b85');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('3a37efd1-ec89-4c99-847f-f0c1ba07021b', 'httpsexample.comendpoint2', 'subscription_data_5', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('9f043b63-d70f-4b5d-9f78-70345e8ab9c0', 'httpsexample.comendpoint3', 'subscription_data_5', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('b9b473aa-d174-439a-8fae-e848486ceb31', 'httpsexample.comendpoint2', 'subscription_data_2', 'f2159221-581e-4d45-860b-8bc66c461a46');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('050b034b-c4a1-4d94-948b-e1326c1e4d16', 'httpsexample.comendpoint3', 'subscription_data_1', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('2b4e3dc1-eee9-4a45-9944-e0d3c09e3c66', 'httpsexample.comendpoint5', 'subscription_data_1', '037b574a-583b-4135-b42f-89512e215b85');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('5f0ef0e1-32bb-4b8a-ba48-18f6e0909b13', 'httpsexample.comendpoint1', 'subscription_data_3', '454e99a0-b0ec-4121-8945-8f2a44b680ef');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('547be6aa-6120-41c2-9436-1cd9a4b573f5', 'httpsexample.comendpoint3', 'subscription_data_3', '1e58adcc-03b3-41ca-82b9-6c2a63f99cc3');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('587764b2-f722-4fad-9ffa-07430c827801', 'httpsexample.comendpoint2', 'subscription_data_2', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('94851f09-7542-4f67-b805-b02b80c60131', 'httpsexample.comendpoint4', 'subscription_data_4', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "PostData" ("id", "title", "content", "estimatedReadingTime", "isFeatured", "status", "userId") VALUES ('22b5222f-29da-4280-b8f2-95011c7674a1', 'Top 10 Travel Destinations for 2023', 'In this blog post we delve into the transformative potential of artificial intelligence in the healthcare sector examining its benefits and challenges.', 866, false, 'pending', 'e2d1c7b8-0991-4818-9153-c2f477c64104');
INSERT INTO "PostData" ("id", "title", "content", "estimatedReadingTime", "isFeatured", "status", "userId") VALUES ('b97c3883-35d6-4833-ae32-5be50d64f316', 'The Ultimate Guide to Remote Work', 'Minimalism is more than just a trend its a lifestyle. Learn how to declutter your life and focus on what truly matters.', 426, true, 'archived', '1d2d8aba-7f08-48cb-95f4-a8cce8f8f29e');
INSERT INTO "PostData" ("id", "title", "content", "estimatedReadingTime", "isFeatured", "status", "userId") VALUES ('4f701f0b-dd9a-4ded-b662-d436feafac93', 'Mastering the Art of Minimalism', 'Quantum computing is set to revolutionize technology. Learn the basics and its potential impact on various industries.', 966, false, 'review', 'ba3abb5a-feab-4e60-b100-c9daf196ae84');
INSERT INTO "PostData" ("id", "title", "content", "estimatedReadingTime", "isFeatured", "status", "userId") VALUES ('25a6fba8-cbe3-469c-a6d5-a55932e238a5', 'Understanding Quantum Computing', 'Quantum computing is set to revolutionize technology. Learn the basics and its potential impact on various industries.', 253, true, 'pending', '1e58adcc-03b3-41ca-82b9-6c2a63f99cc3');
INSERT INTO "PostData" ("id", "title", "content", "estimatedReadingTime", "isFeatured", "status", "userId") VALUES ('1c2b2ae0-ac8e-48ea-b0bb-e83436594dce', 'Top 10 Travel Destinations for 2023', 'Minimalism is more than just a trend its a lifestyle. Learn how to declutter your life and focus on what truly matters.', 900, false, 'published', '1e58adcc-03b3-41ca-82b9-6c2a63f99cc3');
INSERT INTO "PostData" ("id", "title", "content", "estimatedReadingTime", "isFeatured", "status", "userId") VALUES ('e42869f1-2ff8-45d7-bbde-f461eebb871a', 'Top 10 Travel Destinations for 2023', 'Discover the top travel destinations for 2023 from exotic beaches to bustling cities and start planning your next adventure.', 287, true, 'review', '1d2d8aba-7f08-48cb-95f4-a8cce8f8f29e');
INSERT INTO "PostData" ("id", "title", "content", "estimatedReadingTime", "isFeatured", "status", "userId") VALUES ('e6781fdb-ea1e-490f-a7fb-154a38cf590b', 'Mastering the Art of Minimalism', 'Remote work has become the new normal. This guide provides tips and tools to help you thrive in a remote working environment.', 692, true, 'published', 'e2d1c7b8-0991-4818-9153-c2f477c64104');
INSERT INTO "PostData" ("id", "title", "content", "estimatedReadingTime", "isFeatured", "status", "userId") VALUES ('21d61e58-bf84-4206-86c9-95afe7d2a391', 'Mastering the Art of Minimalism', 'Remote work has become the new normal. This guide provides tips and tools to help you thrive in a remote working environment.', 570, true, 'draft', 'e2d1c7b8-0991-4818-9153-c2f477c64104');
INSERT INTO "PostData" ("id", "title", "content", "estimatedReadingTime", "isFeatured", "status", "userId") VALUES ('36104c35-03eb-4627-9bf2-c2dbd39a1adb', 'Understanding Quantum Computing', 'Minimalism is more than just a trend its a lifestyle. Learn how to declutter your life and focus on what truly matters.', 25, false, 'draft', '454e99a0-b0ec-4121-8945-8f2a44b680ef');
INSERT INTO "PostData" ("id", "title", "content", "estimatedReadingTime", "isFeatured", "status", "userId") VALUES ('f328f434-cbbe-4f03-b14a-80de60af33bb', 'Understanding Quantum Computing', 'Remote work has become the new normal. This guide provides tips and tools to help you thrive in a remote working environment.', 683, false, 'pending', '2757554f-13a8-4fab-8569-cf50e7444da0');

INSERT INTO "Attachment" ("id", "fileUrl", "fileType", "postId") VALUES ('555a667e-a6c6-4972-8eb3-0a9e432c691a', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=181', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=182', '25a6fba8-cbe3-469c-a6d5-a55932e238a5');
INSERT INTO "Attachment" ("id", "fileUrl", "fileType", "postId") VALUES ('7d2abd40-07a3-4059-b9c1-8051ad8d0b81', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=184', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=185', 'b97c3883-35d6-4833-ae32-5be50d64f316');
INSERT INTO "Attachment" ("id", "fileUrl", "fileType", "postId") VALUES ('a7d11c8b-ea9f-4ecf-8424-08c38d56324d', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=187', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=188', '4f701f0b-dd9a-4ded-b662-d436feafac93');
INSERT INTO "Attachment" ("id", "fileUrl", "fileType", "postId") VALUES ('d437b5e0-b489-47f4-8e8c-d66bcd7ea03e', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=190', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=191', '25a6fba8-cbe3-469c-a6d5-a55932e238a5');
INSERT INTO "Attachment" ("id", "fileUrl", "fileType", "postId") VALUES ('d2aeb5d5-17cb-4535-8178-ca8e49e73588', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=193', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=194', '1c2b2ae0-ac8e-48ea-b0bb-e83436594dce');
INSERT INTO "Attachment" ("id", "fileUrl", "fileType", "postId") VALUES ('df3a3fe5-aedf-4987-a28d-3c430384f649', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=196', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=197', '25a6fba8-cbe3-469c-a6d5-a55932e238a5');
INSERT INTO "Attachment" ("id", "fileUrl", "fileType", "postId") VALUES ('9a5f29c6-27c4-4b6f-956b-e468a47f48c9', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=199', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=200', 'b97c3883-35d6-4833-ae32-5be50d64f316');
INSERT INTO "Attachment" ("id", "fileUrl", "fileType", "postId") VALUES ('c967265a-b099-4926-9a42-f654e6f589c5', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=202', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=203', 'f328f434-cbbe-4f03-b14a-80de60af33bb');
INSERT INTO "Attachment" ("id", "fileUrl", "fileType", "postId") VALUES ('4c4d3422-3411-4aa3-b5df-82b6fb4fbbf7', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=205', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=206', '21d61e58-bf84-4206-86c9-95afe7d2a391');
INSERT INTO "Attachment" ("id", "fileUrl", "fileType", "postId") VALUES ('42a89437-573a-4837-ae07-f24c64cb115b', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=208', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=209', '1c2b2ae0-ac8e-48ea-b0bb-e83436594dce');

INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('d595c65b-9cd7-4905-bfe8-87c5a7d62835', 'I disagree with some points but overall a good read.', '1c2b2ae0-ac8e-48ea-b0bb-e83436594dce', '1d2d8aba-7f08-48cb-95f4-a8cce8f8f29e');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('268e98b1-6415-4164-9064-8e6df41f5d98', 'This is a fantastic post Learned a lot.', 'e42869f1-2ff8-45d7-bbde-f461eebb871a', 'ba3abb5a-feab-4e60-b100-c9daf196ae84');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('7df42538-9d36-44e5-a73c-faca0d1682a5', 'This is a fantastic post Learned a lot.', 'f328f434-cbbe-4f03-b14a-80de60af33bb', 'a8765620-9237-4cbf-bcec-e1c25684815e');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('158d3175-47aa-4b3b-9858-4971fd61da92', 'This is a fantastic post Learned a lot.', '4f701f0b-dd9a-4ded-b662-d436feafac93', 'ba3abb5a-feab-4e60-b100-c9daf196ae84');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('1389a18d-c711-4061-8254-84cf533ef00f', 'Can you provide more details on the topic', '21d61e58-bf84-4206-86c9-95afe7d2a391', '037b574a-583b-4135-b42f-89512e215b85');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('e03b83e0-fc07-43d2-9479-125b74f09e60', 'Can you provide more details on the topic', 'e6781fdb-ea1e-490f-a7fb-154a38cf590b', '1d2d8aba-7f08-48cb-95f4-a8cce8f8f29e');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('66c6c98e-aa19-46c8-810e-26dbf170c989', 'Can you provide more details on the topic', '36104c35-03eb-4627-9bf2-c2dbd39a1adb', 'ba3abb5a-feab-4e60-b100-c9daf196ae84');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('8f31d51e-de68-418f-b108-92e86272e4c0', 'This is a fantastic post Learned a lot.', '4f701f0b-dd9a-4ded-b662-d436feafac93', 'a8765620-9237-4cbf-bcec-e1c25684815e');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('19ab00ff-ca7d-41bc-83a7-361a88ec5493', 'I disagree with some points but overall a good read.', 'e42869f1-2ff8-45d7-bbde-f461eebb871a', 'e2d1c7b8-0991-4818-9153-c2f477c64104');
INSERT INTO "Comment" ("id", "content", "postId", "userId") VALUES ('0c873cb2-1abc-4f1f-84a2-568033fcf1db', 'This is a fantastic post Learned a lot.', '25a6fba8-cbe3-469c-a6d5-a55932e238a5', '2757554f-13a8-4fab-8569-cf50e7444da0');

INSERT INTO "ContactSubmission" ("id", "name", "email", "message") VALUES ('cacd9221-9410-417c-9560-57d72a7f4393', 'David Wilson', '232Krista32@gmail.com', 'I encountered an issue while signing in.');
INSERT INTO "ContactSubmission" ("id", "name", "email", "message") VALUES ('afc20d45-1ab1-4579-9645-7ad5d68dfc74', 'Emily Davis', '236Lauriane19@gmail.com', 'I love the blog content keep it up');
INSERT INTO "ContactSubmission" ("id", "name", "email", "message") VALUES ('93c4cba1-4025-4901-8190-0668a734645b', 'David Wilson', '240Carlos_Murray85@gmail.com', 'Can you write more about AI technologies');
INSERT INTO "ContactSubmission" ("id", "name", "email", "message") VALUES ('5ed2343a-55b2-4e38-9a7b-dd24951d0f77', 'Emily Davis', '244Carroll74@hotmail.com', 'Could you add more topics on web development');
INSERT INTO "ContactSubmission" ("id", "name", "email", "message") VALUES ('52da48c1-b9e6-48c5-a964-ae0fd5906c41', 'Emily Davis', '248Selina29@gmail.com', 'Can you write more about AI technologies');
INSERT INTO "ContactSubmission" ("id", "name", "email", "message") VALUES ('d8bf5018-a1a8-4a1e-bce4-9168ec32cfd4', 'Jessica Brown', '252Lloyd5@hotmail.com', 'I encountered an issue while signing in.');
INSERT INTO "ContactSubmission" ("id", "name", "email", "message") VALUES ('896cdaa1-88c6-4b9c-8f70-746707e8e47f', 'Jessica Brown', '256Lilian19@hotmail.com', 'Can you write more about AI technologies');
INSERT INTO "ContactSubmission" ("id", "name", "email", "message") VALUES ('07c338c5-77d6-48a2-b602-4122afaff334', 'Alice Johnson', '260Justus.Sawayn57@hotmail.com', 'I encountered an issue while signing in.');
INSERT INTO "ContactSubmission" ("id", "name", "email", "message") VALUES ('ac9dd85f-2410-497f-89f6-397088164add', 'David Wilson', '264Edward89@hotmail.com', 'The design is fantastic very userfriendly.');
INSERT INTO "ContactSubmission" ("id", "name", "email", "message") VALUES ('1d942c32-a42e-4e8e-989a-93b942c6c952', 'Emily Davis', '268Darryl16@hotmail.com', 'Could you add more topics on web development');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
