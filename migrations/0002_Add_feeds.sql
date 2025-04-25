-- Migration number: 0002 	 2025-04-25T19:29:25.820Z
CREATE TABLE IF NOT EXISTS feeds (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    date TEXT NOT NULL
);

-- Insert some sample data into our comments table.
INSERT INTO feeds (name, date)
VALUES
    ('Feed 1', '2025-04-25'),
    ('Feed 2', '2025-04-26'),
    ('Feed 3', '2025-04-27')
;
