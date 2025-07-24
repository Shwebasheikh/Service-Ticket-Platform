package com.sts.service;

import java.util.List;

import com.sts.dto.request.TicketRequest;
import com.sts.dto.response.TicketResponse;

public interface TicketService {
	 TicketResponse createTicket(TicketRequest request);
	 List<TicketResponse> getAllTickets();
	}
