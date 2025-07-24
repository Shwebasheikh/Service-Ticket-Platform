package com.sts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sts.entity.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {}
