package com.sts.service.impl;


import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sts.dto.request.TicketRequest;
import com.sts.dto.response.TicketResponse;
import com.sts.entity.Ticket;
import com.sts.repository.TicketRepository;
import com.sts.service.TicketService;

@Service
public class TicketServiceImpl implements TicketService {
	@Autowired
	 private TicketRepository ticketRepository;
	 @Override
	 public TicketResponse createTicket(TicketRequest request) {
	 Ticket ticket = new Ticket();
	 ticket.setTitle(request.title());
	 ticket.setDescription(request.description());
//	 ticket.setStatus(request.status());
	 ticket.setCreatedAt(LocalDateTime.now());
	 ticket = ticketRepository.save(ticket);
	 return new TicketResponse(ticket.getId(), ticket.getTitle(),ticket.getDescription(), ticket.getStatus(), ticket.getCreatedAt());
	 }

	 
//	 Retriving all tickets 
	 @Override
	 public List<TicketResponse> getAllTickets() {
	 return ticketRepository.findAll().stream()
	 .map(ticket -> new TicketResponse(ticket.getId(), ticket.getTitle(),
	ticket.getDescription(), ticket.getStatus(), ticket.getCreatedAt()))
	 .collect(Collectors.toList());
	 }
	}

	