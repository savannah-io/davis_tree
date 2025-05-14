-- Create contacts table
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

-- Create policies for contacts
CREATE POLICY "Enable insert access for all users on contacts" 
    ON contacts FOR INSERT 
    TO public 
    WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users on contacts" 
    ON contacts FOR SELECT 
    TO authenticated 
    USING (true);

CREATE POLICY "Enable update access for authenticated users on contacts" 
    ON contacts FOR UPDATE 
    TO authenticated 
    USING (true); 