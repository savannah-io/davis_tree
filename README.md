# NEW TEMPLATE PROJECT

This repository is a reusable template for creating Next.js sites with Supabase, configured via JSON in a Supabase `site_configs` table.

## Initial Setup d

1.

(1.1) Create New Repository in Git
[x] New Project name -> Public -> Init w/ README.md & .gitignore (node)

(1.2) Copy project to new local directory && Open Cursor in new directory
[ ] (In Template Terminal) Run: cp -r . /c/Users/J/OneDrive/Desktop/Sites/[NEW-SITE-PROJECT-DIRECTORY]
[ ] Right Click Directory -> More Options -> |OPEN WITH CURSOR|

(1.3) Edit package.json file name/description
[ ] Change the name: "name": "templatesoite",
[ ] Change the description: "description": "AutoSite Template Site",
[ ] IN TERMINAL, Run: rm -rf node_modules package-lock.json
[ ] -> npm install
[ ] -> npm run dev
[ ] _GO TO: localhost:3000 to test running_
[ ] _In terminal, Ctrl+C to kill the terminal_

(1.4) Initialize Git
[ ] IN TERMINAL RUN: git remote set-url origin https://github.com/savannah-io/[NEW-SITE-PROJECT-DIRECTORY]
[ ] -> : git remote -v (to check status)
[ ] GITHUB DT : Commit Changes to main Branch ( Push Changes )
[ ] _Check Github to make sure changes were pushed_

## Supabase Configuration

2. Create Supabase Project:

(2.1) Enter Supabase Credentials Into .env & .env.local
[ ] NEXT_PUBLIC_SUPABASE_URL=https://[NEW-SUPABASE-URL].supabase.co
[ ] NEXT_PUBLIC_SUPABASE_ANON_KEY=[NEW-ANON-KEY]

(2.2) Update the SITE ID /src/app/config/page.js
[ ] const SITE_ID = '[templatesoite]';

(2.3) Run Supabase SQL
[ ] _RUN THE BELOW SQL IN THE SQL EDITOR_
-- Create reviews table
CREATE TABLE IF NOT EXISTS public.reviews (
id BIGSERIAL PRIMARY KEY,
author_name TEXT NOT NULL,
profile_photo_url TEXT NOT NULL,
rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
relative_time_description TEXT NOT NULL,
text TEXT NOT NULL,
time BIGINT NOT NULL,
created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS reviews_time_idx ON public.reviews(time DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous read access
CREATE POLICY "Allow anonymous read access"
ON public.reviews
FOR SELECT
TO anon
USING (true);

    -- Insert reviews into the reviews table

INSERT INTO public.reviews (author_name, profile_photo_url, rating, relative_time_description, text, time, created_at)
VALUES

## CTRL+F LOCALCONFIG.TS

N
