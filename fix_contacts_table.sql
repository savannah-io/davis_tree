-- Drop the existing contacts table if there are issues
DROP TABLE IF EXISTS contacts;

-- Create contacts table with the correct structure
CREATE TABLE contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT NOT NULL,
    service TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Reset policies
DROP POLICY IF EXISTS "Enable insert access for all users on contacts" ON contacts;
DROP POLICY IF EXISTS "Enable read access for authenticated users on contacts" ON contacts;
DROP POLICY IF EXISTS "Enable update access for authenticated users on contacts" ON contacts;

-- Create simpler policy for anonymous submissions
CREATE POLICY "Allow public inserts on contacts"
ON contacts FOR INSERT
TO public
WITH CHECK (true);

-- Policy for authenticated users to read
CREATE POLICY "Allow authenticated reads on contacts"
ON contacts FOR SELECT
TO authenticated
USING (true);

-- Policy for authenticated users to update
CREATE POLICY "Allow authenticated updates on contacts"
ON contacts FOR UPDATE
TO authenticated
USING (true); 