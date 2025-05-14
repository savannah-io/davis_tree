-- Insert reviews into the reviews table
INSERT INTO public.reviews (author_name, profile_photo_url, rating, relative_time_description, text, time, created_at)
VALUES
  ('Pam Goodman', 'https://example.com/placeholder.jpg', 5, '4 years ago', 'Jimmy has always done an exceptional job on EVERY project he has done for us - tree trimming/pruning as well as roof repair/replacement. He has an impeccable work ethic and will go out of his way to get the job done. I highly recommend Davis Tree for any job no matter how big or small!!', extract(epoch from (now() - interval '4 years'))::bigint, NOW() - interval '4 years'),

  ('Jennifer Benton', 'https://example.com/placeholder.jpg', 5, 'a year ago', 'Jimmy Davis tree service did a phenomenal job on a last minute need we had for some trees to come down. He had amazing communication, customer service, prices and attention to detail. His crew was also top notch!', extract(epoch from (now() - interval '1 year'))::bigint, NOW() - interval '1 year'),

  ('Milan Brown', 'https://example.com/placeholder.jpg', 5, '11 months ago', 'Quick, Clean, and Knowledgeable.

I have a huge tree over my driveway, and during a big storm, it dropped a branch on my car and pretty much crushed it. Davis Tree came out, and the health of the trees on my property was assessed. It was recommended that pruning be done for the one over the driveway. I have never seen this tree so healthy!', extract(epoch from (now() - interval '11 months'))::bigint, NOW() - interval '11 months'),

  ('Toni Guest', 'https://example.com/placeholder.jpg', 5, '7 months ago', 'Davis Tree did a wonderful job! We thought they were reasonably priced, punctual, and had great communication with the owner.', extract(epoch from (now() - interval '7 months'))::bigint, NOW() - interval '7 months'),

  ('Preston Willis (pwillis)', 'https://example.com/placeholder.jpg', 5, 'a year ago', 'Jimmy did a fantastic job taking out a numbers of trees and cleaning out the woods behind my home. I would highly recommend Davis Tree to anyone in need of tree service. I will be using them again in the near future.', extract(epoch from (now() - interval '1 year'))::bigint, NOW() - interval '1 year'),

  ('Chance Warren', 'https://example.com/placeholder.jpg', 5, 'a year ago', 'Great service and a pleasure to work with. Jimmy was honest in his original proposal and stayed true to his word on getting our tree removal needs addressed. I will be calling on Davis Tree Service again when the need arises. Thanks Jimmy!', extract(epoch from (now() - interval '1 year'))::bigint, NOW() - interval '1 year'),

  ('Kipp Maddox', 'https://example.com/placeholder.jpg', 5, '2 years ago', 'Davis tree beat all the other quotes I got for the tree I had to have removed. A professional crew with a professional attitude. The foreman Arles was knowledgeable and quick with his work. Overall very satisfied with the job they did. 10/10 would recommend. I was also exceptionally impressed with his employees driving skills and attention to safety when following them to the job site. I wish I could handle a trailer like he could!', extract(epoch from (now() - interval '2 years'))::bigint, NOW() - interval '2 years'),

  ('Ceasar Martinez', 'https://example.com/placeholder.jpg', 5, '2 years ago', 'I had some troublesome trees that posed a danger to the house. I was unsure how to address them and Davis Tree walked me through the process with such clarity, that my anxiousness was put fully at ease. They worked quick and efficiently and when they left, it was like they were never there. My yard was still in perfect condition!', extract(epoch from (now() - interval '2 years'))::bigint, NOW() - interval '2 years'),

  ('Mark von Kutzleben', 'https://example.com/placeholder.jpg', 5, '4 years ago', 'Mr. Davis came out to give me an estimate to trim up several large trees in my yard. His crew showed up exactly when they said they would and cleaned up so completely I hardly knew that they had been there. All his help was super friendly and professional. I will use them again.', extract(epoch from (now() - interval '4 years'))::bigint, NOW() - interval '4 years'),

  ('Brandon Pipkin', 'https://example.com/placeholder.jpg', 5, '2 years ago', 'Jimmy has been a buddy of mine for several years, and I can''t brag on him and his crew enough. He provides exceptional customer service, and I would highly recommend him to anyone and everyone.', extract(epoch from (now() - interval '2 years'))::bigint, NOW() - interval '2 years'),

  ('Kelsey Craft', 'https://example.com/placeholder.jpg', 5, '2 years ago', 'With all the wind lately he was extremely helpful with a couple trees that went down! I will continue business with him because he is affordable and does great work.', extract(epoch from (now() - interval '2 years'))::bigint, NOW() - interval '2 years'),

  ('Michael Gonyea', 'https://example.com/placeholder.jpg', 5, '2 years ago', 'Professional, courteous, and an extremely hard working team! I easily recommend Davis Tree for any of your tree cutting or clearing needs.', extract(epoch from (now() - interval '2 years'))::bigint, NOW() - interval '2 years'),

  ('Michael Lallerstedt', 'https://example.com/placeholder.jpg', 5, 'a year ago', 'Im very pleased with the work that Davis Tree Service did removing and grinding the stump from a tree that was damaged in the back yard. I will use them again in the future.', extract(epoch from (now() - interval '1 year'))::bigint, NOW() - interval '1 year'),

  ('Hal Copeland', 'https://example.com/placeholder.jpg', 5, '4 years ago', 'Jimmy Davis and his crew were extremely responsive and professional. I am completely satisfied and will use this company for any future work.', extract(epoch from (now() - interval '4 years'))::bigint, NOW() - interval '4 years'),

  ('Craig Cox', 'https://example.com/placeholder.jpg', 5, '3 years ago', 'These guys have removed mature pine trees from my yard on 2 different occasions. I''m always impressed at how professional the crews are and how respectful of your property they are.', extract(epoch from (now() - interval '3 years'))::bigint, NOW() - interval '3 years'),

  ('arles johnso n', 'https://example.com/placeholder.jpg', 5, '4 years ago', 'Professional, knowledgeable tree service! They did awesome work on the red oak in my yard . cleaned up like it was never there.', extract(epoch from (now() - interval '4 years'))::bigint, NOW() - interval '4 years'),

  ('Chance Benson', 'https://example.com/placeholder.jpg', 5, '4 years ago', 'Jimmy Was super nice and showed up on time and got the job done!', extract(epoch from (now() - interval '4 years'))::bigint, NOW() - interval '4 years'),

  ('Ethan Johnson', 'https://example.com/placeholder.jpg', 5, '2 years ago', 'Timely and professional. Very impressed. Cleaned up after themselves.', extract(epoch from (now() - interval '2 years'))::bigint, NOW() - interval '2 years'),

  ('Holly H', 'https://example.com/placeholder.jpg', 5, '2 years ago', 'These guys do great work for a great value!', extract(epoch from (now() - interval '2 years'))::bigint, NOW() - interval '2 years'),

  ('Chris Freeman', 'https://example.com/placeholder.jpg', 1, '3 years ago', 'Will not return calls or respond to emails guess he didn''t need the business', extract(epoch from (now() - interval '3 years'))::bigint, NOW() - interval '3 years'),

  ('Chad Woodall', 'https://example.com/placeholder.jpg', 5, 'a year ago', 'Great experience! Highly recommend!', extract(epoch from (now() - interval '1 year'))::bigint, NOW() - interval '1 year'),

  ('liana cox', 'https://example.com/placeholder.jpg', 1, 'a year ago', 'Never showed up to do the job.', extract(epoch from (now() - interval '1 year'))::bigint, NOW() - interval '1 year'),

  ('Lauryn Craft', 'https://example.com/placeholder.jpg', 5, '2 years ago', 'In a word- unmatched!', extract(epoch from (now() - interval '2 years'))::bigint, NOW() - interval '2 years'); 