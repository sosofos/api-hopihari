delimiter $$

drop trigger if exists after_insert_lines;
create trigger after_insert_lines
after insert on hopi_hari_db.lines
for each row
begin 

	declare wait_time int;
	declare line_count int;
	declare total_wait int;
    
    select time_waiting into wait_time
    from rides
    where id = new.rides_id;
    
    select count(users_id) into line_count
    from hopi_hari_db.lines
    where rides_id = new.rides_id;
    
    set total_wait = wait_time * line_count;
    
    
    insert into notifications(description, rides_id, users_id) values
    (concat(total_wait, "minuto(s) de espera para o brinquedo"), new.rides_id, new.users_id, true);
    end $$



delimiter ;