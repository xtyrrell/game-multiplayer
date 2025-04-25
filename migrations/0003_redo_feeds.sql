-- Migration number: 0003 	 2025-04-25T19:30:25.820Z
CREATE TABLE IF NOT EXISTS feeds (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    date TEXT NOT NULL
);

-- Insert some sample data into our comments table.
DELETE FROM feeds;

INSERT INTO feeds (name, date)
VALUES
    ('max', '1715361820')
;
