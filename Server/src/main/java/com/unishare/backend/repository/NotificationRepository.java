package com.unishare.backend.repository;

import com.unishare.backend.model.Notification;
import com.unishare.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

    List<Notification> findByReceiverId(Long categoryId);
}