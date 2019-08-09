require 'test_helper'

class FullStackDevelopersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @full_stack_developer = full_stack_developers(:one)
  end

  test "should get index" do
    get full_stack_developers_url
    assert_response :success
  end

  test "should get new" do
    get new_full_stack_developer_url
    assert_response :success
  end

  test "should create full_stack_developer" do
    assert_difference('FullStackDeveloper.count') do
      post full_stack_developers_url, params: { full_stack_developer: { email: @full_stack_developer.email, name: @full_stack_developer.name, number_of_languages_learned: @full_stack_developer.number_of_languages_learned } }
    end

    assert_redirected_to full_stack_developer_url(FullStackDeveloper.last)
  end

  test "should show full_stack_developer" do
    get full_stack_developer_url(@full_stack_developer)
    assert_response :success
  end

  test "should get edit" do
    get edit_full_stack_developer_url(@full_stack_developer)
    assert_response :success
  end

  test "should update full_stack_developer" do
    patch full_stack_developer_url(@full_stack_developer), params: { full_stack_developer: { email: @full_stack_developer.email, name: @full_stack_developer.name, number_of_languages_learned: @full_stack_developer.number_of_languages_learned } }
    assert_redirected_to full_stack_developer_url(@full_stack_developer)
  end

  test "should destroy full_stack_developer" do
    assert_difference('FullStackDeveloper.count', -1) do
      delete full_stack_developer_url(@full_stack_developer)
    end

    assert_redirected_to full_stack_developers_url
  end
end
