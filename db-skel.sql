CREATE TABLE messages(  
  id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  message TEXT,
  author_id TEXT,
  channel_id TEXT
);
