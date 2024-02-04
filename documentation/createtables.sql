

CREATE TABLE institutes (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE modules (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE user_types (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE users (
    id INT PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    username VARCHAR(255),
    email VARCHAR(255),
    institute_id INT,
    department_id INT,
    type_id INT,
    linkedin VARCHAR(255),
    phone VARCHAR(255),
    photo VarChar(255),
    FOREIGN KEY (institute_id) REFERENCES institutes(id),
    FOREIGN KEY (department_id) REFERENCES departments(id),
    FOREIGN KEY (type_id) REFERENCES user_types(id)
);

CREATE TABLE student_data (
    userid INT, 
    resume VARCHAR(255),  
    semester VARCHAR(50),  
    module INT,  
    FOREIGN KEY (userid) REFERENCES users(id),
    FOREIGN KEY (module) REFERENCES modules(id)
);

CREATE TABLE faculty_data (
    user_id INT,
    designation VARCHAR(255),
    secondary_designation VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE clubs (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    about TEXT,
    vision TEXT,
    objective TEXT,
    poster VARCHAR(255) 
);

CREATE TABLE admins_club_link (
    clubid INT,
    userid INT,
    PRIMARY KEY (clubid, userid),
    FOREIGN KEY (clubid) REFERENCES clubs(id),
    FOREIGN KEY (userid) REFERENCES users(id)
);
CREATE TABLE alumni_club_link (
    clubid INT,
    userid INT,
    PRIMARY KEY (clubid, userid),
    FOREIGN KEY (clubid) REFERENCES clubs(id),
    FOREIGN KEY (userid) REFERENCES users(id)
);

CREATE TABLE club_mentor_link (
    club_id INT,
    user_id INT,
    PRIMARY KEY ( club_id, user_id),
    FOREIGN KEY (club_id) REFERENCES clubs(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE core_member_link (
    user_id INT,
    club_id INT,
    PRIMARY KEY (user_id, club_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (club_id) REFERENCES clubs(id)
);
CREATE TABLE events (
    eventid SERIAL PRIMARY KEY,
    name VARCHAR(255),
    poster VARCHAR(255),
    venue VARCHAR(255),
    date_time TIMESTAMP,  
    description TEXT,
    registration_url VARCHAR(255),
    qr_code VARCHAR(255)
);

CREATE TABLE events_club_link (
    club_id INT,
    event_id INT,
    PRIMARY KEY (club_id, event_id),
    FOREIGN KEY (club_id) REFERENCES clubs(id),
    FOREIGN KEY (event_id) REFERENCES events(eventid)
);
CREATE TABLE event_sponsors (
    eventid INT,
    sponsorname VARCHAR(255),
    sponsor_url VARCHAR(255),
    sponsor_logo VARCHAR(255), 
    PRIMARY KEY (eventid, sponsorname),
    FOREIGN KEY (eventid) REFERENCES events(eventid)
);
CREATE TABLE user_club_link (
    user_id INT,
    club_id INT,
    PRIMARY KEY (user_id, club_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (club_id) REFERENCES clubs(id)
);
CREATE TABLE feeds (
    feedid INT PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    contenttype VARCHAR(50),
    caption VARCHAR(255),
    userid INT,
    time TIMESTAMP,
    hashtags VARCHAR(255),
    FOREIGN KEY (userid) REFERENCES users(id)
);

CREATE TABLE reactions (
    reactionid INT PRIMARY KEY,
    name VARCHAR(255),
    icon VARCHAR(255)
);
CREATE TABLE reactions_feed_link (
    feedid INT,
    userid INT,
    reactionid INT,
    PRIMARY KEY (feedid, userid, reactionid),
    FOREIGN KEY (feedid) REFERENCES feeds(feedid),
    FOREIGN KEY (userid) REFERENCES users(id),
    FOREIGN KEY (reactionid) REFERENCES reactions(reactionid)
);
CREATE TABLE event_photos (
    eventid INT,
    photourl VARCHAR(255),
    PRIMARY KEY (eventid, photourl),
    FOREIGN KEY (eventid) REFERENCES events(eventid)
);
CREATE TABLE event_content_link (
    eventid INT,
    userid INT,
    PRIMARY KEY (eventid, userid),
    FOREIGN KEY (eventid) REFERENCES events(eventid),
    FOREIGN KEY (userid) REFERENCES users(id)
);
