class Api::MessagesController < ApplicationController
  before_action :set_conversation

  def create
    receipt = current_user.send_message(@conversation, params([:body])
    redirect_to receipt.conversation
  end

  private

  def set_conversation
    @conversation = current_user.mailbox.conversations.find(params[:conversation_id])
  end
end
